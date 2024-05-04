import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

// import { urlFor } from '../../client';

const Header = ({ header }) => {

  return (
    <div id='Inicio' className="app__header">
      <div className="app__header-info">
        <div>
          <motion.h1
            whileInView={{
              x: [-100, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.5 }}>{header.title}</motion.h1>
          <motion.p whileInView={{
            x: [-100, 0],
            opacity: [0, 1]
          }}
            transition={{ duration: 1 }}>
            {header.subtitle}
          </motion.p>
          <div>
            <motion.a href='#Contacto' whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              Contactanos
            </motion.a>
            <a href='/'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"></path></g></svg>
              Ver Nuestra <br />
              Presentacion
            </a>
          </div>
        </div>
      </div>
      <div className="app__header-image">
        <div className='app__header-image-body'>
          <motion.img
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            src={images.headerDemoImage}
            alt="header-img"
          />
          <div className='app__header-review'>
            <div className='app__header-review-img'>
              {header.reviewImage?.map((image, index) => (
                <img className='pic' src={image} key={index} alt='Review Images' />
              ))}
            </div>
            <h2>{header.review} Reseñas +</h2>
            <div className='app__header-review-score'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"></path></g></svg>
              5.0
            </div>
          </div>
        </div>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4, ease: 'easeInOut' }} className='body-img' src={images.circle} alt="circle1" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.6, ease: 'easeInOut' }} className='body-img' src={images.circle} alt="circle2" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.8, ease: 'easeInOut' }} className='body-img' src={images.circle} alt="circle3" />
      </div>
    </div>
  )
};

export default Header;
