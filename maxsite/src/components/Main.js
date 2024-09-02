import React from 'react';

export default function Main() {
    return (
        <div className="intro">
            
            <div>
                <p className="title-text">hi. i'm</p>
                <h1 className="main--name">max xiong.</h1>
                <p className="title-text">freshman @ duke university</p>
                <button className="button-64">view projects          →</button>
                <div>
                    <ul>
                        <li>Email (preferred)</li>
                        <li>LinkedIn</li>
                        <li>Google Scholar</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            
            <img className="techbropic" src="/images/tb.png" alt="TechBro" height="350"></img>
        </div>
    );

}