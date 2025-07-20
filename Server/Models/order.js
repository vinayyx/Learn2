import mongoose, { model } from "mongoose"

const orderSchema = new mongoose.Schema({
    email:String, 
    razorpay_order_id:String, 
    razorpay_payment_id: String, 
    course_link:String,
    createdAt:{
        type: Date,
        default: Date.now ()
    }
})

export default mongoose.model("Orders", orderSchema);