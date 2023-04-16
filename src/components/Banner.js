import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return <div className='section'>
    <div className='container mx-auto'>
        <div>
          <div>
            <h1>Umidjon <span>Hoshimov</span></h1>
          </div>
          <div>
            <img src={Image} alt="umidjon" />
          </div>
        </div>
    </div>
  </div>;
};

export default Banner;
