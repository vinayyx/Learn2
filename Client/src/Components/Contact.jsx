import React, { useState } from 'react';
import axios from "axios"
import toast from "react-hot-toast"



const Contact = () => {

  const [email, setEmail] = useState()
  const [description, setDescription] = useState()


  const handlesumbit = async (e) => {

    e.preventDefault();

    if(!email || !description) { 
       toast.error("All filed are requird")
       return
    }

    try {

      await axios.post("http://localhost:3000/Contact", {
        email: email,
        description: description,
      })

      toast.success("Your contact has been sumbited")

    } catch (error) {

      toast.error(error)



    }





  }






  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4 py-10 sm:px-8 md:px-[12vw]">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">

        <div className="bg-[#1e293b] border border-red-500 rounded-lg p-6 hover:bg-[#334155] transition duration-300">
          <h2 className="text-2xl font-semibold text-red-400 mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-3">
            If you have any queries regarding your course access, incorrect email entry, or complaints,
            feel free to reach out.
          </p>
          <p className="text-gray-300 font-medium">
            We usually respond within <span className="text-white">24 hours</span>.
          </p>
        </div>


        <div className="bg-[#1e293b] border border-red-500 rounded-lg p-6 hover:bg-[#334155] transition duration-300">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter a valid email address"
                className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                placeholder="Type your query here..."
                rows="5"
                className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handlesumbit}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
