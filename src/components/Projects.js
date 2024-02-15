// Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      image: 'path_to_image_1', // replace with your image path
      link: 'https://link_to_project_1', // replace with your project link
      description: "BLAH BLAH BLAH"
    },
    {
      name: 'Project 2',
      image: 'path_to_image_2', // replace with your image path
      link: 'https://link_to_project_2', // replace with your project link
      description: "BLAH BLAH BLAH"
    },
    {
      name: 'Project 3',
      image: 'path_to_image_3', // replace with your image path
      link: 'https://link_to_project_3', // replace with your project link
      description: "BLAH BLAH BLAH"
    }
  ];

  return (
    <div>
      <div className="description">
        <h2>My Projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet quis lacus aliquet tristique. Vivamus eget arcu justo. Morbi pulvinar mattis nunc, a dignissim sem ultrices vitae. Fusce congue dui in dui facilisis sodales. Maecenas ac diam eu dolor rhoncus rutrum. Nunc vulputate sodales pellentesque. Nam condimentum sapien vel magna pulvinar varius. Nam vitae dapibus leo. Integer maximus enim sem, condimentum varius odio venenatis ac. Vestibulum placerat maximus velit, sed aliquam nisi rhoncus ut. Quisque sit amet arcu sit amet elit fermentum venenatis quis vitae lorem. Mauris feugiat urna ut ante aliquam dapibus.

Aliquam nec tincidunt mi, at placerat massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus congue felis eu aliquam ultricies. Donec est enim, volutpat id gravida tincidunt, rhoncus nec est. Nulla laoreet interdum varius. Proin tempor scelerisque nibh non consectetur. Aliquam dignissim erat a erat eleifend porttitor.</p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
