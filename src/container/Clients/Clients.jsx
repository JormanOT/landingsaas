import React, { useState, useEffect } from 'react'
import './Clients.scss'
import { motion } from 'framer-motion'

import { urlFor, client } from '../../client';

const Clients = () => {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    const clientsQuery = '*[_type == "clients"]';

    client.fetch(clientsQuery).then((data) => {
      setClients(data);
    });
  }, []);

  return (
    <div id='Clientes' className="app__clients">
      <h1> Clientes </h1>
      <div className="app__clients-logo">
        {clients.map((client) => (
          <motion.img
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            src={urlFor(client.imgUrl)}
            key={`${client.name}-image`}
             />
        ))}
      </div>
    </div>
  )
}

export default Clients