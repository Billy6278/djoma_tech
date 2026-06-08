import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} <strong>Djoma Tech</strong>. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
