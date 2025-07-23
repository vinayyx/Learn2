import razorpayConn from "../Config/razorpay.js";
import sendmail from "../Utils/sendmail.js";
import orderModel from "../Models/order.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

export const createOrder = async (req, res) => {
    const options = {
        amount: 1000, // Amount in paisa (₹50)
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
    };

    try {
        const order = await razorpayConn.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.error("Error creating Razorpay order:", error.message);
        res.status(500).json({
            success: false,
            message: "Order creation failed",
            error: error.message,
        });
    }
};

export const verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !email) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields",
        });
    }

    const hash = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    if (hash === razorpay_signature) {
        const courselink = "https://drive.google.com/drive/folders/1yccCZpFLubou6bNBMs7FzGNX27A0oyWi?usp=sharing";

        try {
            await orderModel.create({
                razorpay_order_id,
                razorpay_payment_id,
                email,
                course_link: courselink,
            });

            await sendmail(email, courselink);

            return res.json({
                success: true,
                message: "Payment verified successfully. Course link sent to email.",
            });
        } catch (error) {
            console.error("Error saving order or sending email:", error.message);
            return res.status(500).json({
                success: false,
                message: "Payment verified, but failed to save data or send mail",
                error: error.message,
            });
        }
    } else {
        return res.status(400).json({
            success: false,
            message: "Invalid signature. Payment verification failed.",
        });
    }
};
