import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-12 md:px-[12vw]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>
          By enrolling in this program, you agree to the following terms and policies. These guidelines are in place to ensure fairness, protect intellectual content, and maintain smooth operations.
        </p>

        <h2 className="text-white font-semibold text-lg mt-4">1. No Refund Policy</h2>
        <p>
          All purchases made are final. Once you have successfully enrolled and completed the payment process, we do not offer any refunds under any circumstances.
        </p>

        <h2 className="text-white font-semibold text-lg mt-4">2. Email Accuracy</h2>
        <p>
          Please ensure that the email address you provide is valid and accurate. Course access links will be sent directly to your registered email. If you enter the wrong email and do not receive the course, contact us within 24 hours at <span className="text-yellow-400 font-medium">learnytix@gmail.com</span>. We’ll get back to you as soon as possible.
        </p>

        <h2 className="text-white font-semibold text-lg mt-4">3. Content Usage & Sharing</h2>
        <p>
          This course and its materials are for personal use only. Sharing, distributing, or uploading the course content elsewhere is strictly prohibited. Any unauthorized distribution will be subject to legal action.
        </p>

        <h2 className="text-white font-semibold text-lg mt-4">4. Content Ownership</h2>
        <p>
          The content provided in this course is sourced and compiled from various creators and platforms. We do not claim full ownership of all materials used. Our intention is purely educational, and all rights belong to the original owners. If any content owner has a concern, please contact us and it will be addressed.
        </p>

        <h2 className="text-white font-semibold text-lg mt-4">5. Support & Complaints</h2>
        <p>
          For any queries, complaints, or concerns related to this program, feel free to reach out at <span className="text-yellow-400 font-medium">learnytix@gmail.com</span>. Our team will respond within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
