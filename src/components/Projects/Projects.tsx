import { useEffect, useState } from "react";
import DataProjects from "./Projects.json";

interface Project {
  id: number;
  url_project: string;
  url_gitHub: string;
  thumbnail: string;
  technologies: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(DataProjects.projects);
  }, []);

  return (
    <div className="pt-10 border-b pb-10">
      <h2 className="text-3xl font-bebas_neue px-4">PERSONAL PROJECTS</h2>
      <div className="p-4 grid grid-cols-1 w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            href={project.url_project}
            target="blank"
            className="relative"
            key={project.id}
          >
            <div className="absolute bottom-1 left-1 z-10 flex flex-wrap">
              {project.technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-full bg-teal-300/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-2 mb-2 font-now_bold" 
                >
                  <span className="text-bold">{technology}</span>
                </div>
              ))}
            </div>
            <img
              src={project.thumbnail}
              alt={`Thumbnail for project ${project.id}`}
              className="rounded-lg brightness-[.4] grayscale hover:grayscale-0 hover:brightness-75 easy-in-out duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
