import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'fitness-tracker',
      description: 'MERN Stack',
      link: "https://sheltered-ravine-90487.herokuapp.com/?id=61b6938c2ce838001658dfd0",
      repo: "https://github.com/AntonioM4/Fitness_Tracker"
    },
    // {
    //   name: 'project3-nfl',
    //   description: 'MERN Stack',
    //   link: "https://sheltered-ravine-90487.herokuapp.com/?id=61b6938c2ce838001658dfd0",
    //   repo: "https://github.com/AntonioM4/Fitness_Tracker"
    // },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
