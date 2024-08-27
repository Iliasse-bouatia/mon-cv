import { useEffect } from 'react';

export default function YourComponent() {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const handleToggle = () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    };

    menuToggle.addEventListener('click', handleToggle);

    return () => {
      menuToggle.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="container">
          <a href="/" className="logo">Logo</a>
          <div className="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}
