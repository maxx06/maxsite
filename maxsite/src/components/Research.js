import React from 'react';
import ProjectCard from './ProjectCard';

export default function Research(){
    return (
        <div>
            <ProjectCard title="Counterfactual Collaborative Reasoning" description="Description 1" button="Button 1" img="/images/research/ccr.png"/>
            <ProjectCard title="Kernelytics: Multispectral Drone Imagery and Deep Learning for Early Corn Assessment" description="Description 1" button="Button 1" img="/images/research/kernelytics.png"/>
        </div>
    );
}