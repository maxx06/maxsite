import React from 'react';

export default function Contact(){
    return (
        <div className="contact" id="contact">
            <img src="/images/stars.png" height="50"/>
            <div className="cont">
                    <a href="mailto:mx71@duke.edu"> <img className="cont--icon2" src="/images/socials/mail.png" alt="email" /> </a>
                    <a href="https://github.com/maxx06"><img className="cont--icon2" src="/images/socials/github.png" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/mx6/"> <img className="cont--icon2" src="/images/socials/linkedin.png" alt="linkedin" /> </a>
                    <a href="https://scholar.google.com/citations?user=8ttO0VoAAAAJ&hl=en">  <img className="cont--icon2" src="/images/socials/scholar.png" alt="scholar" /> </a>
             </div>
            
        </div>
    );
}