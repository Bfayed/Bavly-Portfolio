
import { Github, Linkedin, Mail, X } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/yourusername", 
      icon: Github 
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/yourusername", 
      icon: Linkedin 
    },
    { 
      name: "X", 
      href: "https://x.com/bavlyayman15", 
      icon: X 
    },
    { 
      name: "Email", 
      href: "mailto:Bavlyfayed@gmail.com", 
      icon: Mail 
    }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/40 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Portfolio<span className="text-primary">.</span></h3>
            <p className="text-foreground/70 max-w-sm">
              A passionate developer trying to make it out there in the real world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-foreground/70 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="block text-foreground/70 hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="block text-foreground/70 hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="block text-foreground/70 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
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
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="public/Bavly's-Resume.pdf"
                download
                className="inline-block mt-2 underline text-foreground/70 hover:text-primary transition-colors"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Bavly Fayed. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            Designed & Built by Bavly Fayed          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
