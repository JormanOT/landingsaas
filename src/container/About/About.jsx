import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';

const About = () => {
  const [services, setServices] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "services"]';

  //   client.fetch(query).then((data) => {
  //     setServices(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text"> Servicios </h2>

      <div className="app__profiles">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={service.title + index}
          >
            <img src={urlFor(service.imgUrl)} alt={service.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{service.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'Servicios',
  'app__whitebg',
);
