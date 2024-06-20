import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <ul className='navbar'>
                <li><a href="/" className='navbaritem'>Home</a></li>
                <li><a href="/about" className='navbaritem'>About</a></li>
                <li><a href="/contact" className='navbaritem'>Contact</a></li>
            </ul>
        </nav>
    );
}