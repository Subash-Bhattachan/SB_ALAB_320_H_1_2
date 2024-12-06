import React from 'react';

const Header = () => {
  return (
    <header>
    <h1 class="heading">Sartre's List</h1>
    <h3 class="saying">Better-Dressed People</h3>
    <nav class="main-nav" aria-label="Main Navigation" role="navigation">
      <ul>
        <li><a href="#womens">Women's</a></li>
        <li><a href="#mens">Men's</a></li>
        <li><a href="#onthestreet">On the Street</a></li>
        <li><a href="#catwalk">The Catwalk</a></li>
        <li><a href="#adwatch">Adwatch</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;






