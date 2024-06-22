import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="projectcard">
            <div className="projectcardtext">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <btn className="button-64">{props.button} →</btn>
            </div>
            <div className="projectcardimg">
                <img src={props.img} alt="pic"></img>
            </div>
        </div>
    );
}