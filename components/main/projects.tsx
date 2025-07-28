export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-52"> */}
        {/* {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))} */}
        <h1 className="text-[26px] font-semibold text-transparent bg-clip-text bg-gradient-to-r text-center from-purple-500 to-cyan-500 py-20 m-20">
          In development...
        </h1>
      {/* </div> */}
    </section>
  );
};
