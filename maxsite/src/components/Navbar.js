import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <ul className='navbar'>
                <li><a href="/" className='navbaritem'>home</a></li>
                <li><a href="#about" className='navbaritem'>about</a></li>
                <li><a href="#contact" className='navbaritem'>contact</a></li>
            </ul>
        </nav>
    );
}