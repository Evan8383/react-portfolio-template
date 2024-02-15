import Project from "../components/Project";
import { useState, useEffect } from 'react';


function Portfolio() {
  const project = [
    {
      title: "Project Title",
      description: "Description of the project goes here. It can span multiple lines.",
      image: "/placeholder.svg",
      link: "https://github.com/Evan8383"
    },
    {
      title: "Project Title",
      description: "Description of the project goes here. It can span multiple lines.",
      image: "/placeholder.svg",
      link: ""
    },
    {
      title: "Project Title",
      description: "Description of the project goes here. It can span multiple lines.",
      image: "/placeholder.svg",
      link: ""
    },
    {
      title: "Project Title",
      description: "Description of the project goes here. It can span multiple lines.",
      image: "/placeholder.svg"
    },
    {
      title: "Project Title",
      description: "Description of the project goes here. It can span multiple lines.",
      image: "/placeholder.svg",
      link: ""
    },
    {
      title: "Test",
      description: "Description of the project goes here. It can span multiple lines.",
      image: "/placeholder.svg",
      link: ""
    }
  ]
  return (
    <>
      <div className="flex flex-wrap p-4 gap-3 justify-center">
      <h1 className="text-3xl font-semibold mb-4 w-full text-center">Portfolio</h1>
        {project.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} image={project.image} link={project.link}/>
        ))}
      </div>
    </>
  )
}

export default Portfolio;