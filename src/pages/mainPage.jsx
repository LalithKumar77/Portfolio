import React from "react";
import "../styles/App.css";
import "../styles/mainpage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import image from "../assets/profile1.jpg";
import icon from  "../assets/lk.png";

function MainPage(){
    return (
        <div className="portfolio">
          <div className="container">
            {/* Navbar */}
            <div className="navbar">
                <img 
                  src={icon}
                  className="nav-icon"
                  alt="icon"
                />
                <p>Lalith Kumar.</p>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Projects</li>
                  <li>Contact</li>
                </ul>
            </div>
            {/* Main Content */}
            <div className="main-content">
              <div className="text-section">
                <p className="hello-text">Hello Everyone.</p>
                <h1 className="name-heading">
                  I'm <span>Lalith Kumar</span> Allu
                </h1>
                <p className="designation">Full Stack Developer</p>
                <button className="portfolio-btn">
                  View <span>→</span>
                </button> 
                <div className="links">
                  <a  href="https://www.linkedin.com/in/lalithkumarallu" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a  href="https://github.com/LalithKumar77" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </div>  
              </div>
            </div>
            {/* Sidebar */}
           
            <div className="sidebar">
            <div className="image-section">
                <div className="image-overlay"></div>
                <img
                  src= {image}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default MainPage;