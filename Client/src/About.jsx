import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-10 sm:px-8 md:px-[12vw]">
      <h1 className="text-4xl font-bold text-center mb-8">About SkillBoost Hub</h1>
      
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
        At <span className="text-white font-semibold">SkillBoost Hub</span>, we provide affordable and practical training courses to help you grow on YouTube. Our goal is to empower beginners with the right knowledge and strategies to succeed without spending a fortune. 
        Whether you're starting from scratch or scaling up, our step-by-step content will guide you at every stage.
      </p>

      <h2 className="text-2xl font-semibold mb-6 text-center">Our Successful Students</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            name: 'Rohit Sharma',
            subs: '250K+ Subscribers',
            story: 'Started from 0. Reached 250K subs in 8 months after learning from our YouTube Automation course.'
          },
          {
            name: 'Anjali Verma',
            subs: '110K+ Subscribers',
            story: 'Used our content strategy, now runs 3 monetized faceless channels successfully.'
          },
          {
            name: 'Faizan Ali',
            subs: '300K+ Subscribers',
            story: 'Grew rapidly in gaming niche using our shorts and automation model.'
          }
        ].map((student, index) => (
          <div key={index} className="bg-[#1e293b] border border-red-500 p-6 rounded-xl hover:bg-[#334155] transition duration-300">
            <h3 className="text-lg font-bold mb-1">{student.name}</h3>
            <p className="text-red-400 font-medium mb-2">{student.subs}</p>
            <p className="text-sm text-gray-300">{student.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
