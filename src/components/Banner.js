import React from 'react';
import Image from '../assets/o.jpg';
import {FaTelegramPlane, FaGithubAlt, FaInstagram} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation'
/*import {motion} from 'framer-motion'
import {fadeIn} from '../variants'*/

const Banner = () => {
    return <div className='section' id='home'>
        <div className='container mx-auto'>
            <div className={'flex flex-col gap-y-8 lg:flex-row'}>
                <div className={'flex-1 text-center font-secondary lg:text-left'}>
                    <h1 className={'text=[55px] font-bold leading-[0.8] lg:text-[110px]'}>
                        Umidjon <span>Hoshimov</span>
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
                    <p className={"mb-8 max-w-lg mx-auto lg:mx-0"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel senti</p>

                    <div className={"flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"}>
                        <button className={'btn btn-lg'}>Contact me</button>
                        <a href='/#' className={'text-gradient btn-link'}>My portfolio</a>
                    </div>

                {/*    Social media     */}
                    <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                        <a href={'/#'}>
                            <FaTelegramPlane />
                        </a>
                        <a href={'/#'}>
                            <FaGithubAlt />
                        </a>
                        <a href={'/#'}>
                            <FaInstagram />
                        </a>
                    </div>
                </div>



                <div className={"profile"}>
                    <img src={Image} alt="umidjon"/>
                </div>
            </div>
        </div>
    </div>;
};

export default Banner;
