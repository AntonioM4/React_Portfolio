import React from 'react';

function Footer() {

  // social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/AntonioM4"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/antonio-marino-092a1418a/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
