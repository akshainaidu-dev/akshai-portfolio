import { ExternalLink, Github, Star } from "lucide-react";
import tensorikImg from "../../assets/projects/tensorik.png";
import autoRecycleImg from "../../assets/projects/autorecycling.png";
import portfolioImg from "../../assets/projects/portfolio.png";

const projects = [
  {
    title: "Tensorik Platform",
    tag: "Flagship Product",
    description:
      "AI-powered education and knowledge-sharing platform focused on practical learning and creator monetization.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Auth", "Payments"],
    live: "https://tensorik.in",
    github: null,
    featured: true,
    image: tensorikImg
  },
  {
    title: "Auto Recycling Engines",
    tag: "Business Website",
    description:
      "Automotive recycling and used engine marketplace website built to support lead generation and business inquiries.",
    tech: ["React", "SEO", "Responsive UI", "Forms"],
    live: "https://autorecyclingengines.com",
    github: null,
    featured: false,
    image: autoRecycleImg
  },
  {
    title: "Portfolio Website",
    tag: "Personal Brand",
    description:
      "Personal portfolio website showcasing projects, services, and founder profile with modern SaaS style UI.",
    tech: ["React", "Tailwind", "UI Design", "Branding"],
    live: null,
    github: "https://github.com/akshainaidu-dev",
    featured: false,
    image: portfolioImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      <div className="absolute left-0 top-1/2 w-[35%] h-[35%] bg-[#4f46e5]/10 blur-[140px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-[#4f46e5] font-bold uppercase tracking-widest text-xs">
            Projects
          </span>

          <h2 className="mt-3 mb-5 text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Products and Websites
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Live products and business websites I have built and shipped.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative bg-[#16181d] border rounded-2xl p-8 flex flex-col
                ${project.featured
                  ? "border-[#4f46e5]/40 shadow-[0_0_80px_rgba(79,70,229,0.15)]"
                  : "border-white/10 hover:border-[#4f46e5]/40"
                }
                hover:shadow-[0_0_50px_rgba(79,70,229,0.12)]
                hover:-translate-y-1
                transition-all duration-300`}
            >
              {project.featured && (
                <div className="absolute -top-3 right-6 bg-[#4f46e5] text-white 
                                text-xs font-bold px-3 py-1 rounded-full 
                                flex items-center gap-1 shadow-lg z-10">
                  <Star size={12} />
                  Featured
                </div>
              )}

              <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover 
                             group-hover:scale-105 
                             transition-transform duration-500"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-3">
                {project.tag}
              </span>

              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#0a0b0d] border border-white/10 
                               px-3 py-1 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold 
                               text-white hover:text-[#4f46e5] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold 
                               text-white hover:text-[#4f46e5] transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
