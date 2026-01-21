import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/80 border-t border-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                ZA Autism Tutoring
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empowering learners with autism to reach their full potential
              through personalized, compassionate education support.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  About Zaib
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#calendar"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Book Session
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-600">(082) 703 1492</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Zaib@autismtutoring.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span className="text-gray-600">
                  Cape Town, South Africa & Online
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 ZA Autism Tutoring. Making learning accessible and joyful for
            every child.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
