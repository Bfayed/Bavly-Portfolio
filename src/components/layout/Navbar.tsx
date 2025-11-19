
import resumePdf from "@assets/BavlyResume.pdf";

import { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Bfayed", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/bavlyfayed2003", icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/iambavly10/", icon: Instagram },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gradient">
          2% about Bavly<span className="text-primary">.</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3 ml-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}

            {}
            <a
              href={resumePdf}
              download="BavlyResume.pdf"
              className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors ml-2"
            >
              <Download size={16} className="mr-2" />
              My Resume
            </a>
          </div>
        </nav>

        {}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {}
      <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <p className="text-sm text-foreground/60">Connect with me</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors p-2"
                  aria-label={link.name}
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>

            {}
            <a
              href={resumePdf}
              download="BavlyResume.pdf"
              className="flex items-center justify-center bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors mt-4"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
