import { Page } from '@/app/types';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#110229] text-white">
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[24px] mb-4">
              HOMIX.AI
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 mb-4">
              AI-powered real estate marketplace connecting you directly with property owners.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#7065f0] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#7065f0] rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#7065f0] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#7065f0] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('conversation')}
                  className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors"
                >
                  Search Properties
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('features')}
                  className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[16px] mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70">
                Email: hello@homix.ai
              </li>
              <li className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70">
                Phone: +1 (555) 123-4567
              </li>
              <li className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70">
                Address: 123 Real Estate Blvd<br />San Francisco, CA 94102
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70">
              © {currentYear} Homix.ai. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors">
                Privacy
              </a>
              <a href="#" className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors">
                Terms
              </a>
              <a href="#" className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[14px] text-white/70 hover:text-[#7065f0] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
