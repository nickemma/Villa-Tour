import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="credit">
        <p>
          {year} - developed by <span>Techie Emma</span> &{' '}
          <span>Okoye Charles</span> | all right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
