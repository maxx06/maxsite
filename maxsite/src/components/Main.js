import React from 'react';

export default function Main() {
    return (
        <div className="intro">
            
            <div>
                <p className="title-text">hi. i'm</p>
                <h1 className="main--name">max xiong.</h1>
                <p className="title-text">freshman @ duke university</p>
                <a href="#research"><button className="button-64">view projects          →</button></a>
                <div className="cont">
                    <a href="mailto:mx71@duke.edu"> <img className="cont--icon" src="/images/socials/mail.png" alt="email" /> </a>
                    <a href="https://github.com/maxx06"><img className="cont--icon" src="/images/socials/github.png" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/mx6/"> <img className="cont--icon" src="/images/socials/linkedin.png" alt="linkedin" /> </a>
                    <a href="https://scholar.google.com/citations?user=8ttO0VoAAAAJ&hl=en">  <img className="cont--icon" src="/images/socials/scholar.png" alt="scholar" /> </a>
                </div>
            </div>
            
            <img className="techbropic" src="/images/tb.png" alt="TechBro" height="350"></img>
        </div>
    );

}