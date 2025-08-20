import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

function Payment() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()



  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const loadRazorpay = async () => {
    const isLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!isLoaded) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const { data: order } = await axios.post(`${import.meta.env.VITE_BACK_END_URL}/order`);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Course Purchase",
        description: "YouTube Content Course",
        order_id: order.id,
        prefill: { email: email },
        handler: async function (response) {
          try {
            const res = await axios.post(`${import.meta.env.VITE_BACK_END_URL}/verify`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email: email,
            });

            navigate("/successful")
            toast.success(res.data.message);


          } catch (err) {
            toast.error("Payment verification failed");
            console.log(err.response?.data || err.message);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();


    } catch (err) {
      toast.error("Something went wrong while creating order");
      console.log(err.response?.data || err.message);
    }


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl w-full">
        {/* Left Card */}
        <div className="bg-slate-800 rounded-xl p-6 text-white flex-1 shadow-xl">
          <div className="mb-2 text-indigo-400 font-semibold">🎉 Limited Time Offer</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Master YouTube Content Creation</h2>
          <p className="text-slate-300 mb-6">
            Learn how to grow on YouTube with strategic content, consistency, and monetization.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <p className="font-semibold">👥 Subscribers</p>
              <p>100,000+</p>
            </div>
            <div>
              <p className="font-semibold">⭐ Rating</p>
              <p>4.9/5</p>
            </div>
            <div>
              <p className="font-semibold">⏱ Duration</p>
              <p>30+ hrs</p>
            </div>
            <div>
              <p className="font-semibold">🎬 Projects</p>
              <p>5+</p>
            </div>
          </div>
          <hr className="border-slate-700 mb-6" />
          <h3 className="text-lg font-semibold mb-3">What You'll Learn:</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>✅ YouTube Channel Strategy</li>
            <li>✅ Video Editing & SEO</li>
            <li>✅ Monetization Methods</li>
            <li>✅ Community Growth</li>
            <li>✅ Content Planning Tools</li>
            <li>✅ Lifetime Access to Updates</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-slate-800 rounded-xl p-6 text-white flex-1 shadow-xl">
          <div className="text-sm text-red-400 font-medium mb-1">🔥 50% OFF – Today Only!</div>
          <h2 className="text-2xl font-bold mb-1">Secure Your Spot</h2>
          <p className="text-indigo-300 text-xl mb-4">
            ₹499<span className="line-through text-slate-400 text-sm ml-2">₹1000</span>
            <span className="ml-2 text-green-400 text-sm">Save ₹501</span>
            <span className="text-gray-400 text-sm mt-2">
              Course access will be sent to your email. Double-check it.
            </span>

          </p>


          <input
            type="email"
            placeholder="Enter your email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-slate-700 text-white mb-4 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            onClick={loadRazorpay}
            className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded text-white font-medium transition"
          >
            🚀 Pay ₹499 & Start Learning
          </button>
          <p className="text-xs text-slate-400 mt-2 text-center">
            Secure payment powered by Razorpay
          </p>
          <div className="mt-6 bg-slate-700 p-4 rounded text-sm">
            <p className="font-semibold mb-2">🎁 Bonus Included:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Content Strategy Feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
