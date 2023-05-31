import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <ol>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/add')}>Add Post</li>
          <li onClick={() => navigate('/help')}>Help</li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;