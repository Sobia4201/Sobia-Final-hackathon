// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Project Sharing app</h2>
        
        
//       </div>
//     </div>
//   );
// };

// const Navbar = () => {
//   return (
//     <nav style={navbarStyles.container}>
//       <Link to="/" style={navbarStyles.link}>
//         <b>Sobia Hafsa</b>
//       </Link>
      
//       <LogoutButton />
//     </nav>
//   );
// };

// const LogoutButton = () => {
//   // Add your logout logic here
//   const handleLogout = () => {
//     // Implement your logout functionality
//     console.log('User logged out');
//   };

//   return (
//     <button style={navbarStyles.logoutButton} onClick={handleLogout}>
//       Logout
//     </button>
//   );
// };


// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: 'auto',
//     padding: '20px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '2.5em',
//     color: '#333',
//   },
//   link: {
//     textDecoration: 'none',
//   },
//   button: {
//     fontSize: '1.2em',
//     padding: '15px 30px',
//     margin: '30px 0',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
//   },
// };

// const navbarStyles = {
//   container: {
//     backgroundColor: '#f8f9fa',
//     padding: '10px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   link: {
//     textDecoration: 'none',
//     margin: '0 10px',
//     color: '#333',
//   },
//   logoutButton: {
//     backgroundColor: '#dc3545',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     padding: '8px 15px',
//   },
// };

// export default Home;

// import React, { useState } from 'react';
// import '../css/'
// import axios from 'axios';

// function ProjectForm() {
//   const [project, setProject] = useState({
//     title: '',
//     developer: '',
//     description: '',
//     hostedURL: '',
//   });

//   const handleSubmit = () => {
//     axios.post('http://localhost:3001/projects', project)
//       .then(response => {
//         console.log('Project submitted successfully:', response.data);
//       })
//       .catch(error => console.error('Error submitting project:', error));
//   };

//   return (
//     <div>
//       <h1>Submit a Project</h1>
//       <form>
//         <label>Title:</label>
//         <input type="text" value={project.title} onChange={(e) => setProject({ ...project, title: e.target.value })} />

//         <label>Developer:</label>
//         <input type="text" value={project.developer} onChange={(e) => setProject({ ...project, developer: e.target.value })} />

//         <label>Description:</label>
//         <textarea value={project.description} onChange={(e) => setProject({ ...project, description: e.target.value })} />

//         <label>Hosted URL:</label>
//         <input type="text" value={project.hostedURL} onChange={(e) => setProject({ ...project, hostedURL: e.target.value })} />

//         <button type="button" onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ProjectForm;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    projectTitle: '',
    developerName: '',
    description: '',
    hostedURL: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate the form data and handle project submission
    // For simplicity, let's just add the project to the projects array
    const newProject = { ...formData };
    setProjects([...projects, newProject]);
    // Clear the form after submission
    setFormData({
      projectTitle: '',
      developerName: '',
      description: '',
      hostedURL: '',
    });
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Project Sharing app</h2>
        
        {/* <Link to="/about" style={styles.link}>
          <button style={styles.button}>Submit Your Project</button>
        </Link> */}

        <ProjectForm
          formData={formData}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />

        <div style={styles.projectContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav style={navbarStyles.container}>

       <h1> Sobia Hafsa</h1>
    
      
      <LogoutButton />
    </nav>
  );
};

const ProjectForm = ({ formData, onInputChange, onFormSubmit }) => {
  return (
    <form style={formStyles.container} onSubmit={onFormSubmit}>
      <h3>Add Your Project</h3>
      <label>
        Project Title:
        <input
          type="text"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Developer Name:
        <input
          type="text"
          name="developerName"
          value={formData.developerName}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Hosted URL:
        <input
          type="url"
          name="hostedURL"
          value={formData.hostedURL}
          onChange={onInputChange}
          required
        />
      </label>
      <button type="submit" style={formStyles.submitButton}>
        Submit Project
      </button>
    </form>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div style={cardStyles.container}>
      <h4>{project.projectTitle}</h4>
      <p>Developer: {project.developerName}</p>
      <p>Description: {project.description}</p>
      <a href={project.hostedURL} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

const LogoutButton = () => {
  // Add your logout logic here
  const handleLogout = () => {
    // Implement your logout functionality
    console.log('User logged out');
  };

  return (
    <button style={navbarStyles.logoutButton} onClick={handleLogout}><Link to="/signup">Logout</Link>
      
    </button>

    
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5em',
    color: '#333',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    fontSize: '1.2em',
    padding: '15px 30px',
    margin: '30px 0',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
};

const navbarStyles = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  link: {
    textDecoration: 'none',
    margin: '0 10px',
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '8px 15px',
  },
};

const formStyles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '20px',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '10px 20px',
    marginTop: '10px',
  },
};

const cardStyles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
  },
};

export default Home;
