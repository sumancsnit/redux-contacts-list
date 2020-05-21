import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
      <div className='container'>
        <a href='#' className='navbar-brand'>
          suman
        </a>
        <div>
          <a href='#' className='btn btn-light ml-auto'>
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
