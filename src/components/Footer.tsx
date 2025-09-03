import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">S</span>
                </div>
                <span className="text-xl font-bold">Solvexia</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Leading manufacturer of high-performance tile adhesives and construction chemicals. 
                Trusted by professionals across India.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="hover:text-accent cursor-pointer transition-colors" />
                <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
                <Linkedin size={20} className="hover:text-accent cursor-pointer transition-colors" />
                <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
                <li><Link to="/technical-specs" className="hover:text-accent transition-colors">Technical Specs</Link></li>
                <li><Link to="/application-guide" className="hover:text-accent transition-colors">Application Guide</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="hover:text-accent transition-colors">Tile Adhesive Grey</span></li>
                <li><span className="hover:text-accent transition-colors">Tile Adhesive White</span></li>
                <li><span className="hover:text-accent transition-colors">Waterproof Series</span></li>
                <li><span className="hover:text-accent transition-colors">Fast Setting Formula</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91 9888761009</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>solvantasstradingcompany@gamil.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-0.5" />
                  <span>
                    Post fakharpur – Tahsil maholi Sitapur U.P. (261151)
                    <br />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 Solvexia. All rights reserved. Built with precision for professional construction.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919888761009"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>
    </>
  );
};

export default Footer;
