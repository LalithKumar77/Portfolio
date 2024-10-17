import React from "react";
import "../styles/about.css";
import image from "../assets/about.jpg";

function About(){
    return ( 
     <div className="about-section">
        <div className="about-container">
         <div className="about-slide">
            <div className="image-section-about">
                <div className="outer-border">
                    <img 
                        src={image}
                        alt="About Me"
                        className="about-image"
                    />
                </div>
            </div>
        </div>
        <div className="separator"></div>
        <div className="context">
            <div className="about-c">
                <div className="line"></div>
                <h1><span>About</span> Me</h1>
                <div className="line"></div>
            </div>
            <div className="text">
                <p>I am <span >Lalith Kumar Allu</span>, a dedicated Full Stack Developer with a passion for building robust and scalable web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I strive to deliver efficient, user-centric solutions that meet the evolving needs of users.</p>
                <p>My approach combines creativity and technical expertise, allowing me to transform ideas into reality while maintaining high standards of code quality. I am committed to continuous learning and actively explore emerging technologies to enhance my skills and stay current in the fast-paced tech landscape.</p>
                <p>Outside of development, I enjoy reading and watching films, which fuel my creativity and provide fresh perspectives. I am eager to connect and collaborate with like-minded professionals to drive innovation in the digital space.</p>
            </div>
        </div>
    </div>
    </div>

    );
}

export default About;