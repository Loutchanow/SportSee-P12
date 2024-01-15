import React from 'react';

const Logo = ({ logo, size }) => {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width: size, height: 'auto' }} />
    </div>
  );
};

export default Logo;
