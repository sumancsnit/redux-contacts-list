import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          suman
        </Link>
        <div>
          <Link to='/add' className='btn btn-light ml-auto'>
            Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
