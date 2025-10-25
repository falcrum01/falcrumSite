import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-white">Falcrum Technology</span>
            </div>
            <p className="text-sm leading-relaxed">
              Connecting exceptional talent with outstanding opportunities across the United States.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/solutions/permanent')} className="hover:text-blue-400 transition-colors">
                  Permanent Staffing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/solutions/contract')} className="hover:text-blue-400 transition-colors">
                  Contract Staffing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/solutions/executive')} className="hover:text-blue-400 transition-colors">
                  Executive Search
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/solutions/rpo')} className="hover:text-blue-400 transition-colors">
                  RPO Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/insights/blog')} className="hover:text-blue-400 transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/insights/case-studies')} className="hover:text-blue-400 transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/opportunities/openings')} className="hover:text-blue-400 transition-colors">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>123 Business Ave, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span>info@falcrumtechnology.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2025 Falcrum Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
