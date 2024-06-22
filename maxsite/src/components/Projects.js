import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <div className="projects">
            <ProjectCard title="Project 1" description="Description 1" button="Button 1" img="boba.png"/>
            <ProjectCard title="Project 2" description="Description 2" button="Button 2" img="boba.png"/>
            <ProjectCard title="Project 3" description="Description 3" button="Button 3" img="boba.png"/>
        </div>
    );
}