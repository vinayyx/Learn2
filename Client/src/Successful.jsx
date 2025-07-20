import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Successful = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      <div className="max-w-xl w-full bg-[#1e293b] border border-red-500 rounded-xl shadow-lg p-8 text-center hover:bg-[#334155] transition duration-300">

        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>

        <p className="text-lg text-gray-300 mb-6">
          Thank you for your payment. The course access link has been sent to your email.
          <br />Please check your inbox (and spam folder).
        </p>

        <p className="text-sm text-gray-400 italic">
          If you entered the wrong email by mistake, contact us within 24 hours at: <br />
          <span className="text-white font-semibold">learnytix@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Successful;



