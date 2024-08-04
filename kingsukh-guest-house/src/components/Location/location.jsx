import React from 'react';
import './location.css'

const Location = () => {
    return (
        <section className='location section'>
           <div className='secIntro'>
                <h2 data-aos='fade-up' data-aos-duration='2000' className='secTitle'>
                Driving Directions
                </h2>
                <p data-aos='fade-up' data-aos-duration='2500'>
                Please follow the signposted directions for Hotel Roy Bed & Breakfast from the city centre
                 </p>
                
                <h2>
                    5.4 km <p>Away from the Town hall</p>
                </h2>
                

                <h2>
                    18 km <p>Away from the Airport</p>
                </h2>
                
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1722807802779!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
        </section>
    );
}

export default Location;
