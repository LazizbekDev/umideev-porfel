import React from 'react';

import logo from '../assets/umideev.png'

const Header = () => {
  return <header id='home' className='py-8 '>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href='/#'>
          <img src={logo} className="logo" alt='umidjon' />
        </a>


        <button className='btn btn-sm'>Hire me</button>
      </div>
    </div>
  </header>;
};

export default Header;
