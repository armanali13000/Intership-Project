import React from 'react';
import './location.css'

const Location = () => {
    return (
        <section className='locationSection'>

            <div className='locationContainer'>

                <div className='locationInfo'>
                <h2>
                        Driving Directions
                </h2>
                    <div className='info'>
                        <p>
                        Please follow the signposted directions for Hotel Roy Bed & Breakfast from the city centre
                        </p>
                        <div className='information'>
                            <div className='info1'>
                                <h2>
                                5.4 km 
                                </h2>
                                <p>Away from the Town hall</p>
                            </div>

                            <div className='info2'>
                                <h2>
                                18 km 
                                </h2>
                                <p>Away from the Airport</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1722807802779!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </section>
    );
}

export default Location;
