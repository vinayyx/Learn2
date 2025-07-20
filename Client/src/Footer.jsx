import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Learnytix</h3>
          <p className="text-gray-400">
            Empowering the next generation of YouTubers with strategy, tools & community.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/terms-policy" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Learnytix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
