import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="projectcard">
            <div>
                <p className="colorful">{props.title}</p>
                <p>{props.description}</p>
                <a href={props.link}><btn className="button-64">{props.button}</btn></a>
            </div>
            <div>
                <img src={props.img} alt="pic" className="pcimg"></img>
            </div>
        </div>
    );
}