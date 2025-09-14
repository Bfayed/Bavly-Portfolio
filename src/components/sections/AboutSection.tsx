
import SectionContainer from "../ui/SectionContainer";
import { Code, BookOpen, Database, Layers } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Java + Spring Boot", value: 70 },
    { name: "Python", value: 70 },
    { name: "C# + .Net", value: 60 },
    { name: "SQL Server", value: 50 },
    { name: "MVC", value: 60 },
    { name: "RabbitMQ", value: 60 },
    { name: "HTML & CSS", value: 90 },
    { name: "JavaScript & TypeScript", value: 80 },
    { name: "React", value: 70 },
    { name: "Angular", value: 85 },
    { name: "Node.js", value: 70 },
    { name: "UI/UX Design", value: 80 },


  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and performant websites using modern technologies and best practices.",
    },
    {
      icon: BookOpen,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs to power your web solutions.",
    },
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "End-to-end development from database design to frontend implementation.",
    },
  ];

  return (
    <SectionContainer id="about" className="bg-secondary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="section-heading animate-fade-in">About Me</h2>
          
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-foreground/80">
              Hello! I'm Bavly Fayed, a passionate developer with over X years of experience in creating digital solutions. I enjoy tackling complex problems and turning them into simple and beautiful interface designs.
            </p>
            
            <p className="text-foreground/80">
              My journey in technology started when I was in college, where I discovered my passion for coding and solving problems. Since then, I've been constantly improving my skills and staying up-to-date with the latest technologies.
            </p>
            
            <p className="text-foreground/80">
              When I'm not coding or pushing pixels, you'll find me exploring nature, reading books, or playing chess. I believe that a balanced life leads to more creative solutions.
            </p>
          </div>
          
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", " .Net", "C#", "React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML", "Angular", "Tailwind CSS", "TypeScript", "Spring Boot", "SQL Server", "RabbitMQ", "MVC"].map((tech) => (
                <span key={tech} className="bg-secondary/50 text-foreground/90 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 animate-fade-in">My Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mt-12 mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>Services I Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="glass-card p-5 animate-fade-in" 
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <service.icon className="text-primary mb-3" size={24} />
                <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                <p className="text-foreground/70 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
