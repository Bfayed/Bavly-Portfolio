
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const HeroSection = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const titles = ["Developer", "Designer", "Creative"];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    const type = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentTitle.substring(0, charIndex - 1);
        }
        charIndex--;
        typingDelay = 50;
      } else {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentTitle.substring(0, charIndex + 1);
        }
        charIndex++;
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typingDelay = 1000; // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingDelay = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingDelay);
    };
    
    setTimeout(type, 1000);
    
    // Cursor blinking
    let blinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.classList.toggle('opacity-0');
      }
    }, 500);
    
    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-40 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute top-0 right-0 bottom-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,0),rgba(15,23,42,0.8))]"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-10">
          <div className="absolute left-0 top-0 h-[200%] w-[200%] scale-50 bg-[conic-gradient(transparent_270deg,rgba(59,130,246,0.3),transparent)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-sm sm:text-base text-primary font-semibold mb-4 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hello, my name is
          </h1>
          
          <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="hero-text">Your Name</h2>
            <div className="hero-text flex items-center mt-2">
              <span>I'm a</span>
              <span className="text-primary mx-3" ref={typedTextRef}></span>
              <span className="text-primary" ref={cursorRef}>|</span>
            </div>
          </div>
          
          <p className="text-xl text-foreground/80 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Building digital experiences that combine beautiful design with solid engineering. Passionate about creating products that solve real problems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all shadow-lg hover:shadow-primary/30 font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-all border border-primary/30 font-medium"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <span className="text-foreground/60">Find me on:</span>
            <div className="flex gap-3">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-primary transition-all">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/60 hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
