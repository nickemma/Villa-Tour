import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <p>
        {year} - developed by <span>Techie</span> Emma & <span>Okoye</span>{' '}
        Charles | all right reserved
      </p>
    </div>
  );
};

export default Footer;
