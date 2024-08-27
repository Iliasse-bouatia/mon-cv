import React, { useEffect } from 'react';

export default function YourComponent() {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const handleToggle = () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    };

    menuToggle.addEventListener('click', handleToggle);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      menuToggle.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <div>
      <button className="menu-toggle">Menu</button>
      <nav className="nav-links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
