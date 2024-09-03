import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="cardheading"> projects. </ h1>
            <ProjectCard title="this website!" description="Personal website made with HTML, CSS, JS, ReactJS. Designed in Figma" button="boba" img="/images/projects/website.png"/>
        </div>
    );
}