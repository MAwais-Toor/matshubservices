import { Facebook, Instagram, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router";
import "../../App.css";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-slate-700 py-10 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="md:col-span-1">
          <NavLink to="/">
            <img src="/logo.png" alt="DevTech Logo" className="h-12 mb-4" />
          </NavLink>
          <p className="text-sm leading-relaxed text-slate-600">
            Learn modern web development with powerful tools and real-world projects.
            We empower developers to innovate with the best tech.
          </p>
        </div>

        {/* IT Services */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">IT Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Digital Marketing</li>
            <li className="hover:text-blue-600 cursor-pointer">Search Engine</li>
            <li className="hover:text-blue-600 cursor-pointer">Website Development</li>
            <li className="hover:text-blue-600 cursor-pointer">Graphic Designing</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Career</li>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Contact Us</h3>
          <p className="flex items-start text-sm mb-2">
            <MapPin className="w-4 h-4 mt-1 mr-2 text-blue-600" />
            Malikpura Main bazaar, Jaranwala Road, Faisalabad
          </p>
          <p className="flex items-center font-semibold text-slate-900 mb-2">
            <Phone className="w-4 h-4 mr-2 text-blue-600" />
            +92 349 2006 206
          </p>
          <p className="text-sm text-slate-600">matshub.info@gmail.com</p>
        </div>
      </div>

      {/* Social Media + Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col items-center text-sm text-slate-500 text-center">
        <div className="flex space-x-4 mb-4">
          <Facebook className="hover:text-blue-600 transition cursor-pointer" />
          <Instagram className="hover:text-blue-600 transition cursor-pointer" />
          <Linkedin className="hover:text-blue-600 transition cursor-pointer" />
          <Github className="hover:text-blue-600 transition cursor-pointer" />
        </div>
        <p>
          © Copyright 2025{" "}
          <span className="text-blue-600 font-medium">
            MATsHub
          </span>. All Rights Reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;
