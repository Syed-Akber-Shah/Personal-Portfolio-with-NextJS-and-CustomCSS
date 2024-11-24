import React from 'react'
import Heading from './Heading';
import Card from './Card'
import '../app/styles/projects.css'

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & Typescript based app for managing and organizing your tasks efficiently.",
        img: "/project_01.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
      id: 1,
      title:"Countdown Timer",
      desc: "A Nextjs and Typescript powered website to track time with an interactive countdown feauture.",
      img: "/project_02.jpg",
      tags: ["Nextjs", "Node", "Typescript", "CSS"],
    },
    {
        id: 2,
        title: "Static Resume",
        desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project_03.jpg",
        tags: ["HTML", "CSS", "Node", "Typescript"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
};

export default Projects;