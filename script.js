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
      {/* Your JSX structure here */}
      <button className="menu-toggle">Menu</button>
      <nav className="nav-links">
        {/* Nav links here */}
      </nav>
    </div>
  );
}
