import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">Sobre</a>
        <a href="/contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;