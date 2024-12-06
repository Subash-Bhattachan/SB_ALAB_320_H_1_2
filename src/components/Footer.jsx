import React from 'react';

const Footer = () => {
    return (
        <footer>
            <nav class="footer-nav" aria-label="Footer Navigation" role="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#womens">Women's</a></li>
                    <li><a href="#mens">Men's</a></li>
                    <li><a href="#onthestreet">On the Street</a></li>
                    <li><a href="#catwalk">The Catwalk</a></li>
                    <li><a href="#adwatch">Adwatch</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tips">Tips</a></li>
                </ul>
            </nav>
            {/* <br> */}
            <p class="footnote">&copy; 2024 Valet Inc. All rights reserved.</p>
        </footer>
    );
};

export default Footer;


