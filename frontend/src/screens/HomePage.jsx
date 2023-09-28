import React from "react";
import './homeassets/css/style.css'
import './homeassets/fonts/font.css'
import {Helmet} from "react-helmet";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import heroBanner from './homeassets/images/hero-banner.png';
import { Link } from 'react-router-dom';
import './homepage.css'

const HomePage = () => {
    const currentYear = new Date().getFullYear();
    const sectionStyle = {
        backgroundImage: `url(${heroBanner})`
      };
      
    return (
        <div className="App">
          <a href="./home.html" target="_blank">Open External Page</a>

      </div>
    )
}


export default HomePage;
