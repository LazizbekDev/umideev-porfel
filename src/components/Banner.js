import React from 'react';
import Image from '../assets/o.jpg';
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
    return <div className='section'>
        <div className='container mx-auto'>
            <div>
                <div>
                    <h1>Umidjon
                        <span>Hoshimov</span>
                    </h1>

                    <div
                        className={'mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] '}>
                        <span className={'text-white mr-4'}>i'm a</span>
                        <TypeAnimation
                            sequence={[
                                "Javascript Developer",
                                2000,
                                "13 y.o",
                                2000
                            ]}
                            speed={50}
                            className={'text-accent'}
                            wrapper={'span'}
                            repeat={Infinity}
                        />

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel senti</p>
                </div>

                <button className={'btn btn-lg'}>Contact me</button>
                <a href='#' className={'text-gradient btn-link'}>My portfolio</a>

                <div className={"profile"}>
                    <img src={Image} alt="umidjon"/>
                </div>
            </div>
        </div>
    </div>;
};

export default Banner;
