
import { useState } from "react";
import SectionContainer from "../ui/SectionContainer";
import { ExternalLink, Github, Info } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
  {
    id: 1,
    title: "Football Hub (React + Node)",
    description:
      "React-based football site (SE/ComS319) with fixtures/news and a Node/Express proxy backend.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Express", "REST"],
    demoUrl: "",
    githubUrl: "https://github.com/Bfayed/Football-Hub-web-application",
    featured: true,
  },
  {
    id: 3,
    title: "Bavly Portfolio (this site)",
    description:
      "Vite + React + Tailwind + shadcn/ui portfolio deployed on GitHub Pages with React Router.",
    image: "/placeholder.svg",
    tags: ["React", "Vite", "Tailwind", "shadcn/ui"],
    demoUrl: "https://bfayed.github.io/Bavly-Portfolio/",
    githubUrl: "https://github.com/Bfayed/Bavly-Portfolio",
    featured: true,
  },
  {
    id: 4,
    title: "Sorting 2D Points (Java)",
    description:
      "Implements 2D point sorting and geometric utilities; explores comparator design and time complexity.",
    image: "/placeholder.svg",
    tags: ["Java", "Algorithms", "Data Structures"],
    demoUrl: "",
    githubUrl: "https://github.com/Bfayed/Sorting-2D-Integrs-points-Java",
  },
  {
    id: 5,
    title: "Stout List (Java)",
    description:
      "Data-structures coursework project showcasing custom list implementations, iterators, and unit tests.",
    image: "/placeholder.svg",
    tags: ["Java", "OOP", "Data Structures"],
    demoUrl: "",
    githubUrl: "https://github.com/Bfayed/Stout-List-Java",
  },
  {
    id: 6,
    title: "Simple Flask App",
    description:
      "Lightweight Python + Flask app with basic routing/forms and server-side rendering; deployment-ready.",
    image: "/placeholder.svg",
    tags: ["Python", "Flask"],
    demoUrl: "",
    githubUrl: "https://github.com/Bfayed/Simple-application-flask-and-python",
  },
  {
    id: 7,
    title: "Lizard Game (Java)",
    description:
      "Small Java game demonstrating an event loop, input handling, and object-oriented game state.",
    image: "/placeholder.svg",
    tags: ["Java", "Game Dev", "OOP"],
    demoUrl: "",
    githubUrl: "https://github.com/Bfayed/Lizard-game-Java",
  },
  {
    id: 8,
    title: "Saint Mary Church Website",
    description:
      "Static site for a charitable organization—content structure, accessibility, and simple deployment workflow.",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "Static Site"],
    demoUrl: "", 
    githubUrl: "https://github.com/Charitable-organization/saint-mary-church",
  },

  ];

  const filters = [
    "all",
    ...Array.from(new Set(projects.flatMap(project => project.tags))).sort(),
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <SectionContainer id="projects">
      <h2 className="section-heading text-center mx-auto animate-fade-in">My Projects</h2>
      
      <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
      </p>
      
      {/* Project filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all ${
              activeFilter === filter
                ? "bg-primary text-white"
                : "bg-secondary/50 text-foreground/70 hover:bg-secondary/80"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Featured projects */}
      {activeFilter === "all" && (
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-semibold text-center mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div key={project.id} className="glass-card overflow-hidden group">
                  <div className="relative h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-5">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-primary/50 text-white px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-foreground/70">{project.description}</p>
                    <div className="mt-4 flex gap-3">
                      {/* <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a> */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <Github size={14} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      
      {/* All projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card overflow-hidden group animate-fade-in" 
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-2">
                  {/* <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-primary hover:bg-background transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-primary hover:bg-background transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-secondary text-foreground/70 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>
            
            {/* <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
            >
              <Info size={14} className="mr-1" />
              Learn more
            </a> */}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
