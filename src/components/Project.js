
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import pas from '../images/Project-Management-Blogs.png';
import bgggg from '../images/doctor.jpg';
import dd from '..';


const Project = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'All Blog App ',
      technologies: ['Use html and css'],
      link: 'https://glittering-alfajores-5113d8.netlify.app/',
      thumbnail: pas,
    },
    {
      title: 'Project 2',
      description: 'A Doctor App',
      technologies: ['React.js'],
      link: 'https://heroic-taffy-290e53.netlify.app/',
      thumbnail: bgggg,
    },
    {
        title: 'Project 3',
        description: 'Rotate Box ',
        technologies: ['Use html and css'],
        link: 'https://glittering-kangaroo-95b10e.netlify.app/',
        thumbnail: dd,
      },

  ];

  return (
    <div>
      <Navbar />
      <div className="projects-container">
      
        <h2>Project Sharing Application</h2>
        
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.thumbnail} alt={`Thumbnail for ${project.title}`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  // Your logout logic can be implemented here
//   const handleLogout = () => {
//     // Implement your logout functionality
//     console.log('User logged out');
//   };

  return (
    <nav className="navbar">
      {/* <span className="navbar-title">Sobia </span>  */}
      {/* <button className="home-button" onClick={handleLogout}>
        Submit your Project
      </button> */}
<button>
<Link to="/home">Submit Your Project</Link>
</button>
    </nav>
  );
};

export default Project;
