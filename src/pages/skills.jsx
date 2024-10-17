import React, { useState } from "react";
import "../styles/App.css";
import "../styles/skills.css";

function Skills() {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <div className="container">
            <div className="content">
                <h1>My Skills</h1>
                <div className="txt">
                <p>
                    I am a passionate <span>Full Stack Developer</span> with expertise in building dynamic, user-friendly applications using a range of technologies. My skills span both frontend and backend development, enabling me to create seamless, full-featured web solutions.
                </p>
                <p>
                    I continuously explore new technologies to stay at the forefront of innovation. Whether it's crafting responsive user interfaces or designing robust backend architectures, I strive to build scalable, efficient applications that solve real-world problems.
                </p>
                <p>
                    Below, you'll find the technologies I frequently work with, as well as the domains I specialize in, from frontend development and UI/UX design to backend systems and cloud infrastructure.
                </p>
                
                </div>
                {/* Toggle Button */}
                <div className="skills-toggle" data-toggle-box>
                    <button 
                        className={`toggle-btn ${activeTab === "skills" ? "active" : ""}`} 
                        onClick={() => setActiveTab("skills")} 
                        data-toggle-btn
                    >
                        Skills
                    </button>
                    <button 
                        className={`toggle-btn ${activeTab === "technologies" ? "active" : ""}`} 
                        onClick={() => setActiveTab("technologies")} 
                        data-toggle-btn
                    >
                        Tools
                    </button>
                </div>

            </div>
            <div className="separator"></div>
            <div className="skill">
                {activeTab === "skills" ? (
                    <div>
                        <h1>Skills</h1>
                        <ul>
                            <li>Frontend Development</li>
                            <li>Backend Development</li>
                            <li>UI/UX Design</li>
                            <li>Database Management</li>
                            <li>Cloud Computing</li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h1>Technologies I Use</h1>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Node.js, Express</li>
                            <li>MongoDB, MySQL</li>
                            <li>Git, GitHub</li>
                            <li>Docker, AWS</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
