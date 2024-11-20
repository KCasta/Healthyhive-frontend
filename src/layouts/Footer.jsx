import React from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Sitemap Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <ul>
            <div className="flex gap-6">
              <li className="mb-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-green-800 text-3xl"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/emmanuel.lio.52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-green-800 text-3xl"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chizobam-kelechi-987404293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-green-800 text-3xl"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </div>
            <li className="mb-2">
              <p>
                +2349039499569 <br /> Kelechichizobam571@gmail.com
              </p>
            </li>
          </ul>
        </div>

        {/* Product Section */}
        {/* <div>
          <h2 className="text-xl font-bold mb-4">Email</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Feedback
              </a>
            </li>
          </ul>
        </div> */}

        {/* Help Section */}
        {/* <div>
          <h2 className="text-xl font-bold mb-4"></h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500">
                Getting s
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500">
                Network status
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-orange-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Referral program
              </a>
            </li>
          </ul>
        </div> */}

        {/* Subscribe Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Send review</h2>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Send your review"
              className="p-2 rounded-l-lg bg-gray-800 text-white border-none focus:ring-2 focus:ring-orange-500 w-full"
            />
            <button
              type="submit"
              className="p-2 rounded-r-lg bg-green-900 text-white font-bold hover:bg-orange-600"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-500">
          &copy; 2024 All rights reserved.{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Aidan Technologies Sdn Bhd
          </a>
        </p>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <a href="#" className="hover:text-orange-500">
            🔗
          </a>
          <a href="#" className="hover:text-orange-500">
            🔗
          </a>
          <a href="#" className="hover:text-orange-500">
            🔗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
