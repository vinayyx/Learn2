import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-10 sm:px-8 md:px-[12vw]">
      <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>

      <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        
        <div className="bg-[#1e293b] p-5 rounded-lg border border-red-500 hover:bg-[#334155] transition duration-300">
          <h2 className="text-xl text-red-400 font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you agree to abide by these Terms and Conditions. If you do not agree, please do not use the site or make any purchases.
          </p>
        </div>

        <div className="bg-[#1e293b] p-5 rounded-lg border border-red-500 hover:bg-[#334155] transition duration-300">
          <h2 className="text-xl text-red-400 font-semibold mb-2">2. Course Access</h2>
          <p>
            Course access is sent via email after successful payment. You must ensure you provide a valid and correct email address. If entered wrong, we are not responsible.
          </p>
        </div>

        <div className="bg-[#1e293b] p-5 rounded-lg border border-red-500 hover:bg-[#334155] transition duration-300">
          <h2 className="text-xl text-red-400 font-semibold mb-2">3. No Refund Policy</h2>
          <p>
            All purchases are final. We do not offer refunds under any circumstances, as the course access is delivered immediately after purchase.
          </p>
        </div>

        <div className="bg-[#1e293b] p-5 rounded-lg border border-red-500 hover:bg-[#334155] transition duration-300">
          <h2 className="text-xl text-red-400 font-semibold mb-2">4. Personal Use Only</h2>
          <p>
            The content is licensed for personal use only. You are not allowed to copy, distribute, resell, or share it in any form. Legal action may be taken if violated.
          </p>
        </div>

        <div className="bg-[#1e293b] p-5 rounded-lg border border-red-500 hover:bg-[#334155] transition duration-300">
          <h2 className="text-xl text-red-400 font-semibold mb-2">5. Intellectual Property</h2>
          <p>
            The content used in our courses may be sourced from publicly available material. We do not claim ownership. We act as a platform to help you access educational content.
          </p>
        </div>

        <div className="bg-[#1e293b] p-5 rounded-lg border border-red-500 hover:bg-[#334155] transition duration-300">
          <h2 className="text-xl text-red-400 font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Please check this page regularly.
          </p>
        </div>

        <div className="bg-[#1e293b] p-5 rounded-lg border border-red-500 hover:bg-[#334155] transition duration-300">
          <h2 className="text-xl text-red-400 font-semibold mb-2">7. Contact Us</h2>
          <p>
            For any concerns, questions, or issues regarding your course or access, contact us at <span className="text-white font-medium">learnytix@gmail.com</span>. We respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
