import React from 'react'
import Modal from '../../components/Modal/Modal';
import { motion } from 'framer-motion'
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine
} from "react-icons/ri";

import './Footer.scss'

const Footer = ({ company, url , term, privacy}) => {
  return (
    <footer className="app__footer">
      <div className="app__footer-social">

        <div className="app__footer-logo">
          <a href="#Inicio" > <img src={url(company.logoUrl)} alt="" /></a>
        </div>

        <nav>
          <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} href="#">{" "}<RiInstagramLine />{" "}</motion.a>
          <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} href="#">{" "}<RiFacebookLine />{" "}</motion.a>
          <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} href="#"> {" "}<RiTwitterLine />{" "}</motion.a>
        </nav>

      </div>
      <div className="app__footer-nav">
        <h3> {company.company} </h3>
        <p>{company.direction}</p>
        <p>{company.mail}</p>
        <p>Tel: {company.phone}</p>
        <nav className="app__footer-nav-list">
          <a href="#Inicio" > Inicio </a>
          <a href="#Servicios" > Servicios </a>
          <a href="#Proyectos"> Proyectos </a>
          <a href="#Testimonios"> Testimonios </a>
          <Modal id='Terms Of Use' term={term} />
          <Modal id='Privacy Policy'privacy={privacy} />
        </nav>
      </div>
      <div className="app__footer-credit">
        <p>
          © {company.company} {new Date().getFullYear()} - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer