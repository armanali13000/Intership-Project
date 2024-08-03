import React from 'react';
import './contact.css'

//importing icon
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Contact = () => {
    return (
        
        <section className='contact container section'>
            <div className='secContainer'>
                <div className='title'>
                    <h2 className='title'>
                        Let's get in touch
                    </h2>
                    <p>
                    Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels
                    </p>
                </div>


                <div className='footerLogo'>
                    <a href='#' className='logo flex'>
                        <h1 className='flex'>
                        <FaMapMarkedAlt className='icon'/>
                        Beside Barshal Water Tank,
                        Manpur, Barhanti,
                        West Bengal 723156 
                        </h1>
                    </a>

                    <a href='#' className='logo flex'>
                        <h1 className='flex'>
                        <MdEmail className='icon'/>kkghosh0099@gmail.com 
                        </h1>
                    </a>

                    <a href='#' className='logo flex'>
                        <h1 className='flex'>
                        <FaPhoneVolume className='icon'/>+91 9007062180
                        </h1>
                    </a>
                </div>
            

                <div className='contactLinks'>
                    {/* <div className='social item'>
                    <FaMapMarkedAlt className='icon'/>
                        Beside Barshal Water Tank,
                        Manpur, Barhanti,
                        West Bengal 723156
                    </div>
                    
                    <div className='social item'>
                    <MdEmail className='icon'/>
                        kkghosh0099@gmail.com
                    </div>
                    
                    <div className='social item'>
                    <FaPhoneVolume className='icon'/> 
                    +91 9007062180
                    </div> */}

                   

                </div>

                <div className='socials flex'>
                    Connect
                    <FaFacebookF className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaInstagram className='icon'/>
                </div>
            </div>
        </section>
    
















    //     <div class="container">
    //   <span class="big-circle"></span>
    //   <img src="img/shape.png" class="square" alt="" />
    //   <div class="form">
    //     <div class="contact-info">
    //       <h3 class="title">Let's get in touch</h3>
    //       <p class="text">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
    //         dolorum adipisci recusandae praesentium dicta!
    //       </p>

    //       <div class="info">
    //         <div class="information">
    //           <img src="img/location.png" class="icon" alt="" />
    //           <p>92 Cherry Drive Uniondale, NY 11553</p>
    //         </div>
    //         <div class="information">
    //           <img src="img/email.png" class="icon" alt="" />
    //           <p>lorem@ipsum.com</p>
    //         </div>
    //         <div class="information">
    //           <img src="img/phone.png" class="icon" alt="" />
    //           <p>123-456-789</p>
    //         </div>
    //       </div>

    //       <div class="social-media">
    //         <p>Connect with us :</p>
    //         <div class="social-icons">
    //           <a href="#">
    //             <i class="fab fa-facebook-f"></i>
    //           </a>
    //           <a href="#">
    //             <i class="fab fa-twitter"></i>
    //           </a>
    //           <a href="#">
    //             <i class="fab fa-instagram"></i>
    //           </a>
    //           <a href="#">
    //             <i class="fab fa-linkedin-in"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="contact-form">
    //       <span class="circle one"></span>
    //       <span class="circle two"></span>

    //       <form action="index.html" autocomplete="off">
    //         <h3 class="title">Contact us</h3>
    //         <div class="input-container">
    //           <input type="text" name="name" class="input" />
    //           <label for="">Username</label>
    //           <span>Username</span>
    //         </div>
    //         <div class="input-container">
    //           <input type="email" name="email" class="input" />
    //           <label for="">Email</label>
    //           <span>Email</span>
    //         </div>
    //         <div class="input-container">
    //           <input type="tel" name="phone" class="input" />
    //           <label for="">Phone</label>
    //           <span>Phone</span>
    //         </div>
    //         <div class="input-container textarea">
    //           <textarea name="message" class="input"></textarea>
    //           <label for="">Message</label>
    //           <span>Message</span>
    //         </div>
    //         <input type="submit" value="Send" class="btn" />
    //       </form>
    //     </div>
    //   </div>
    // </div>


    );
}

export default Contact;
