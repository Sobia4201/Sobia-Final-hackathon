import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Our Company</h2>
      <p style={styles.description}>
        Welcome to XYZ Company, where excellence meets innovation. We are a team of dedicated professionals
        committed to delivering high-quality products and services to our clients.
      </p>
      <div style={styles.workerContainer}>
        <div style={styles.worker}>
          <img src="https://media.istockphoto.com/id/1057484742/photo/young-happy-worker-and-manager-giving-each-other-manly-greet-at-steel-mill.jpg?s=612x612&w=0&k=20&c=7uuQG4ax1rNc7RluYWIgJpovxS8XbFPlfdSDpxJCd-4=" alt="Worker 1" style={styles.workerImage} />
          <p style={styles.workerName}>John Doe</p>
        </div>
        <div style={styles.worker}>
          <img src="https://img.freepik.com/free-photo/smiling-young-builder-man-uniform-with-safety-helmet-standing-with-crossed-arms-isolated-orange-wall-with-copy-space_141793-119957.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700352000&semt=ais" alt="Worker 2" style={styles.workerImage} />
          <p style={styles.workerName}>Jane Smith</p>
        </div>
      </div>
      <p style={styles.description}>
        Our diverse team brings a wealth of experience and creativity to every project.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link to="/contact" style={styles.link}>
        <button style={styles.button}>Go to Contact</button>
      </Link>
    </div>
 
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
  description: {
    fontSize: '1.2em',
    color: '#555',
    marginTop: '15px',
  },
  workerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
  worker: {
    margin: '0 15px',
  },
  workerImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  workerName: {
    marginTop: '10px',
    fontSize: '1.2em',
    color: '#333',
  },
};

export default About;