import React from 'react';

const reviews = [
  {
    name: "Sanjay Y.",
    initial: "S",
    review:
      "This course covered many aspects that other YouTubers typically overlook when making videos. The insights and strategies provided were practical and comprehensive, helping me understand the intricacies of growing and managing a successful YouTube channel. I highly recommend this course to anyone serious about becoming a YouTuber."
  },
  {
    name: "Rahul P.",
    initial: "R",
    review:
      "Thank you very much for such an awesome and amazing 'YouTube Blueprint Course.' I learned a lot of things from this course, and I regard you as my 'Guru' for my YouTube journey."
  },
  {
    name: "Faizan M.",
    initial: "F",
    review:
      "You told me the secrets I could never have found online. Thank you very much, Dhruv."
  },
  {
    name: "Ayush J.",
    initial: "A",
    review:
      "The depth in explaining important things, sharing personal knowledge and experiences in a short and precise manner — beautifully done."
  },
  {
    name: "Aniket D.",
    initial: "A",
    review:
      "Maine kaafi savings se is course ko kharida aur ye mujhe worth it laga. Chapter 6 bohot helpful hai. Maine apna YouTube channel bhi khola hai aur ek video pe kaam bhi shuru kar diya hai. Aab sach much lag raha hai mera career ban jayega!"
  },
  {
    name: "Anonymous",
    initial: "A",
    review:
      "The course was outstanding and extremely beneficial. I learned a great deal and have successfully improved the quality of my YouTube channel's videos as a result."
  }
];

const Reviwes = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4 sm:px-10 md:px-[8vw] text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Student Reviews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-lg shadow-md hover:shadow-red-500/20 border border-gray-700 p-6 transition-all duration-300"
          >
            <div className="text-red-600 text-3xl mb-3 font-bold leading-none">“</div>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              {item.review}
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center text-red-500 font-bold text-lg">
                {item.initial}
              </div>
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <div className="text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviwes;
