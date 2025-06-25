import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
  Youtube,
  ArrowRight,
} from "lucide-react";
import tekiskyLogo from "../assets/images/tekiskyLogo.jpg"

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-mpgin-darkBlue text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Institution Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MPGI Nanded</h3>
            <p className="text-gray-300">
              Matoshri Pratishthan Group of Institutions is a premier
              educational institution committed to excellence in engineering and
              management education.
            </p>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-mpgin-blue" />
              <p className="text-gray-300">Mon-Sat: 9:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-mpgin-blue mt-1 flex-shrink-0" />
                <address className="text-gray-300 not-italic">
                  Khupsarwadi, Nanded - 431606,
                  <br />
                  Maharashtra, India
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-mpgin-blue" />
                <a
                  href="tel:+912462269900"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 2462 269900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-mpgin-blue" />
                <a
                  href="mailto:info@mpgin.edu.in"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@mpgin.edu.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[{ name: "Admin login", path: "/login" }].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-mpgin-blue group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        {/* Google Map Section - Full Width */}
        <div className="mt-12 w-full rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.414377297236!2d77.25181457520566!3d19.089468982117882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce29f6fffffffd%3A0xf705e1b2a364d350!2sMatoshri%20Pratishthan%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1746428538305!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="MPGI Nanded Location"
          ></iframe>
        </div>

        {/* Footer Bottom */}
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Matoshri Pratishthan Group of
              Institutions. All Rights Reserved.
            </p>

            <a
              href="https://tekisky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1 hover:opacity-90 transition-opacity mt-4 md:mt-0"
            >
              <img
                src={tekiskyLogo}
                alt="Tekisky Pvt Ltd"
                className="w-32 h-auto object-contain rounded-lg shadow-md"
              />
              <span className="text-sm text-gray-400 hover:text-white text-center">
                Maintained & Developed by Tekisky Pvt. Ltd
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
