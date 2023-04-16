import React from 'react';
import { BiClipboard, BiHomeAlt, BiUser } from "react-icons/bi";
import { BsC1, liphoardNata, BsBriefcase, BsChatSquare, BsClipboardData } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Nav = () => {
  return (

    <nav className='fixed bottom-2 ly:bottom-8 w-full overflow:hiiden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center'>
            <BiHomeAlt />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center'>
            <BiUser />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center'>
            <BsClipboardData />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center'>
            <BsBriefcase />
          </Link>

        </div>
      </div>
    </nav >

  );
};

export default Nav;
