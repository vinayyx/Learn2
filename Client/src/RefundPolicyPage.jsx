import React from 'react';

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-10 sm:px-8 md:px-[12vw]">
      <h1 className="text-4xl font-bold text-center mb-8">Refund Policy</h1>

      <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-10">
        We believe in delivering value-packed content at an affordable price. However, due to the digital nature of our course, we do not offer any refunds. Please read the terms carefully before purchasing.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-[#1e293b] border border-red-500 p-5 rounded-xl hover:bg-[#334155] transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-red-400">1. No Refunds</h3>
          <p className="text-sm text-gray-300">
            Once you make the payment and receive the course access link, no refund will be issued under any condition.
          </p>
        </div>

        <div className="bg-[#1e293b] border border-red-500 p-5 rounded-xl hover:bg-[#334155] transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-red-400">2. Email Accuracy</h3>
          <p className="text-sm text-gray-300">
            Please ensure you enter a valid and correct email. The course link is sent to the email you provide. We are not responsible if you mistype or enter the wrong email.
          </p>
        </div>

        <div className="bg-[#1e293b] border border-red-500 p-5 rounded-xl hover:bg-[#334155] transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-red-400">3. Contact Within 24 Hours</h3>
          <p className="text-sm text-gray-300">
            If you do not receive the course link within 5–10 minutes, contact us at <span className="text-white font-medium">learnytix@gmail.com</span> within 24 hours.
          </p>
        </div>

        <div className="bg-[#1e293b] border border-red-500 p-5 rounded-xl hover:bg-[#334155] transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-red-400">4. Do Not Share</h3>
          <p className="text-sm text-gray-300">
            This course content is for personal use only. You are strictly prohibited from sharing or reselling the material. Legal action may be taken if violated.
          </p>
        </div>

        <div className="bg-[#1e293b] border border-red-500 p-5 rounded-xl hover:bg-[#334155] transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-red-400">5. Legal Disclaimer</h3>
          <p className="text-sm text-gray-300">
            All the content provided in this course is collected from public sources and does not belong to us directly. We claim no ownership or copyright.
          </p>
        </div>

        <div className="bg-[#1e293b] border border-red-500 p-5 rounded-xl hover:bg-[#334155] transition duration-300">
          <h3 className="text-xl font-bold mb-2 text-red-400">6. Complaint & Support</h3>
          <p className="text-sm text-gray-300">
            If you face any issue, feel free to reach out to us at <span className="text-white font-medium">learnytix@gmail.com</span>. We usually respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
