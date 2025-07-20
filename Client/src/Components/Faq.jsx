// FAQSection.jsx
import React, { useState } from 'react';
import {
  FaClock,
  FaHourglassStart,
  FaMicrophone,
  FaYoutube,
  FaVideo,
  FaCertificate,
  FaMoneyBillWave,
  FaUserCheck
} from 'react-icons/fa';

const faqData = [
  {
    icon: <FaHourglassStart className="text-red-600 text-xl" />,
    question: 'How long will it take to get access to the course?',
    answer: 'You will receive course access immediately after payment through email.'
  },
  {
    icon: <FaClock className="text-red-600 text-xl" />,
    question: 'What is the time commitment required for the course?',
    answer: 'The course is self-paced and flexible, but ideally you can complete it in 2-3 weeks.'
  },
  {
    icon: <FaMicrophone className="text-red-600 text-xl" />,
    question: 'Which language is the course in?',
    answer: 'The course is in Hindi with English subtitles.'
  },
  {
    icon: <FaYoutube className="text-red-600 text-xl" />,
    question: 'Do I need to have a YouTube channel for this course?',
    answer: 'No, but it’s recommended to create one while learning.'
  },
  {
    icon: <FaVideo className="text-red-600 text-xl" />,
    question: 'Are the course videos downloadable?',
    answer: 'No, the videos can only be streamed online after logging in.'
  },
  {
    icon: <FaCertificate className="text-red-600 text-xl" />,
    question: 'Will I receive a certificate after completing the course?',
    answer: 'Yes, you will receive a certificate of completion via email.'
  },
  {
    icon: <FaMoneyBillWave className="text-red-600 text-xl" />,
    question: 'Is there any refund policy?',
    answer: 'No, since it’s a digital product, no refunds are provided.'
  },
  {
    icon: <FaUserCheck className="text-red-600 text-xl" />,
    question: 'Who can join this course?',
    answer: 'Anyone interested in YouTube automation, beginners to intermediate level.'
  }
];

const Faqyt = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-10 sm:px-8 md:px-[12vw]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="border border-red-500 rounded-lg p-4 transition-all duration-300 bg-[#1e293b] hover:bg-[#334155] cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.icon}
                <p className="text-md sm:text-lg font-semibold">{item.question}</p>
              </div>
              <span className="text-red-500 text-2xl font-bold">+</span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}
              style={{ transitionProperty: 'max-height, opacity' }}
            >
              <p className="text-sm sm:text-base text-gray-300">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqyt;
