import { Link } from "react-router-dom";
import projectData from "./ProjectData";

const Projects = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">🧩 Projects</h2>
        <p className="text-gray-300 mb-12 text-xl">
          Some of my best work — for more, visit{" "}
          <a
            href="https://github.com/developerTamanna"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            GitHub
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 h-full flex flex-col justify-between items-center w-full rounded-lg overflow-hidden shadow-xl hover:scale-105 transition transform duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto max-h-80 object-fill"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-red-600 text-white text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    🌐 Live
                  </a>

                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-400 underline hover:text-yellow-300"
                  >
                    💻 Client GitHub
                  </a>

                  {project.serverRepo && (
                    <a
                      href={project.serverRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-yellow-400 underline hover:text-yellow-300"
                    >
                      🖥️ Server GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
