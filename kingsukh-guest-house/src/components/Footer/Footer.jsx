import React, {useEffect} from 'react'
import './footer.css'

//importing icons
import { GiSpookyHouse } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'





const Footer = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])


  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div data-aos='zoom-in' data-aos-duration='2000' className='logoDiv'>
          <div data-aos='zoom-in' data-aos-duration='2000' className='footerLogo'>
              <a href='#' className='logo flex'>
                <h1 className='flex'>
                  <GiSpookyHouse className='icon' />
                  Kingsukh Guest House 
                </h1>
              </a>
          </div>

          <div className='socials flex'>
          <FaFacebookF className='icon'/>
          <FaTwitter className='icon'/>
          <FaInstagram className='icon'/>
          </div>
           
        </div>

        <div data-aos='zoom-in' data-aos-duration='3000' className='footerLinks'>
          <span className='linkTitle'>
            Information
          </span>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Explore</a>
          </li>
          <li>
            <a href='#'>Travel</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </div>

        <div data-aos='zoom-in' data-aos-duration='4000' className='footerLinks'>
          <span className='linkTitle'>
            Connect with Us
          </span>
          <li>
            <a href='#'>Destination</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Travel & Condition</a>
          </li>
          <li>
            <a href='#'>Privacy</a>
          </li>
        </div>

        <div data-aos='zoom-in' data-aos-duration='5000' className='footerLinks'>
          <span className='linkTitle'>Contact Us</span>
          <span className='phone'>+913487569851</span>
          <span className='email'>kingkush@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
