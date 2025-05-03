
import SectionContainer from "../ui/SectionContainer";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "Jan 2023 - Present",
      description: [
        "Led the development of a new customer-facing web application using React and TypeScript",
        "Implemented state management with Redux for a complex application with 50+ screens",
        "Collaborated with UX designers to create a cohesive design system for the company",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "Jun 2020 - Dec 2022",
      description: [
        "Developed RESTful APIs using Node.js and Express",
        "Built responsive UIs using React and Material UI",
        "Implemented authentication and authorization using JWT",
        "Participated in agile development processes, including daily standups and sprint planning",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Web Studio Agency",
      period: "Mar 2018 - May 2020",
      description: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Integrated third-party APIs for e-commerce, social media, and analytics",
        "Fixed bugs and implemented new features for existing websites",
        "Collaborated with designers to ensure accurate implementation of designs",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "University Name",
      period: "2016 - 2018",
      description: "Focused on advanced algorithms, machine learning, and web technologies.",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "Another University",
      period: "2012 - 2016",
      description: "Core curriculum included programming fundamentals, data structures, algorithms, and software design principles.",
    },
  ];

  return (
    <SectionContainer id="experience" className="bg-secondary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="section-heading animate-fade-in">Work Experience</h2>
          <div className="relative border-l border-primary/30 pl-8 mt-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="mb-10 relative animate-fade-in" 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[37px] top-1.5 shadow-sm shadow-primary/50"></div>
                
                <div className="glass-card p-5">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <div className="flex items-center text-foreground/60 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-primary mb-4">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-foreground/70">{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-secondary text-foreground/70 px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="section-heading animate-fade-in">Education</h2>
          <div className="relative border-l border-primary/30 pl-8 mt-8">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className="mb-10 relative animate-fade-in" 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[37px] top-1.5 shadow-sm shadow-primary/50"></div>
                
                <div className="glass-card p-5">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <div className="flex items-center text-foreground/60 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="text-primary mb-4">{edu.institution}</div>
                  <p className="text-foreground/70">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="section-heading mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>Certifications</h2>
          <div className="space-y-4 mt-8">
            <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-semibold">AWS Certified Developer - Associate</h3>
              <p className="text-sm text-foreground/60 mt-1">Amazon Web Services • 2023</p>
            </div>
            <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <h3 className="font-semibold">Professional Scrum Master I (PSM I)</h3>
              <p className="text-sm text-foreground/60 mt-1">Scrum.org • 2022</p>
            </div>
            <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="font-semibold">Meta Frontend Developer Certificate</h3>
              <p className="text-sm text-foreground/60 mt-1">Meta • 2021</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
