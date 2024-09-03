import React from 'react';
import ProjectCard from './ProjectCard';

export default function Research(){
    return (
        <div>
            <h1 className="cardheading" id="research"> research. </ h1>
            <ProjectCard title="Counterfactual Collaborative Reasoning (WSDM'23)" description="CCR integrates counterfactual and neural logical reasoning to generate artificial counterfactual training examples to enhance sequential recommendation models, demonstrating superior performance on real-world datasets and providing additional explanations for recommendations." button="view paper" img="/images/research/ccr.png" link="https://dl.acm.org/doi/pdf/10.1145/3539597.3570464"/>
            <ProjectCard title="Kernelytics: Multispectral Drone Imagery and Deep Learning for Early Corn Assessment (IEEE XPlore)" description="
This paper presents Kernelytics, an algorithm that analyzes drone images to assess corn fields early in the season. By employing machine learning for tasks like stand count, plant growth, and health, Kernelytics enhances crop yields and resource efficiency." button="view paper" img="/images/research/kernelytics.png" link="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10534990"/>
        </div>
    );
}