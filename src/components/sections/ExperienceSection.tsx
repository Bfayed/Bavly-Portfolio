
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
      role: "Co-op Full Stack Developer",
      company: "Altec Body Plant in Osceola",
      period: "May 2025 - Present",
      description: [
        "During my co-op at Altec’s Osceola division, I worked as a software engineering co-op where I contributed to several Angular front-end applications built with TypeScript, integrated with a C# WebAPI backend and SQL Server. I gained hands-on experience with state management using NgRx ComponentStore, building responsive UIs with Kendo UI, and implementing features that improved efficiency and usability for internal business applications. My role involved collaborating with cross-functional teams, debugging and enhancing existing code, and delivering solutions that followed company coding standards. This experience not only strengthened my technical expertise in TypeScript and modern web development but also gave me valuable exposure to enterprise-level software engineering practices and teamwork.",
      ],
      technologies: ["C#", ".Net", "SQL Server", "Angular", "TypeScript" , "Scss", "Kendo UI", "NgRx Component Store", "SignalR"],
    },
    {
      id: 2,
      role: "Internship",
      company: "Vontas",
      period: "May 2024 - August 2024",
      description: [
        "During my internship at Vontas, I contributed to the development of a website using Spring Boot, helping streamline backend processes and improve efficiency. I supported the integration of RabbitMQ for asynchronous communication between services, ensuring reliable high-volume data transactions in distributed systems. Additionally, I assisted in implementing an MVC architecture to achieve a clean separation of concerns and improve code maintainability. Working closely with senior developers, I also collaborated on enhancing application scalability and fault tolerance by leveraging message queuing and microservices architecture.",
      ],
      technologies: ["Spring Boot", "RabbitMQ", "MVC", "MongoDB"],
    },
    {
      id: 3,
      role: "Various Roles",
      company: "Service & Retail Industry",
      period: "2019 - present",
      description: [
        "Through my work in various service and retail roles at McDonald’s, Pizza Hut, Walmart, Kum & Go, and DoorDash, I developed a strong work ethic and the ability to perform in fast-paced, demanding environments. These experiences taught me humility, financial responsibility, and the value of hard work while strengthening my communication, teamwork, and problem-solving skills. They also gave me a deep appreciation for discipline and perseverance, lessons that continue to guide me in both my personal growth and professional career."
      ],
      technologies: ["Life Experince" , "Work ethics" , "Problem Solving" , "Communication" , "Discipline"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "High school Diploma",
      institution: "Waukee High School",
      period: "2018 - 2021",
      description: "Focused on building myslef and discover my passions and what I like. I believe my discipline during high school whta made me who I am today.",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "Iowa State University",
      period: "2023 - December 2026",
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
              <h3 className="font-semibold">C license </h3>
              <p className="text-sm text-foreground/60 mt-1">Soccer/Football coaching 2022</p>
            </div>
            
            {/* <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <h3 className="font-semibold">Professional Scrum Master I (PSM I)</h3>
              <p className="text-sm text-foreground/60 mt-1">Scrum.org • 2022</p>
            </div> */}

            {/* <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="font-semibold">Meta Frontend Developer Certificate</h3>
              <p className="text-sm text-foreground/60 mt-1">Meta • 2021</p>
            </div> */}
          
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
