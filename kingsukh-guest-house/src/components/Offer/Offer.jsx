import React, {useEffect} from 'react'
import './offer.css'

import { IoBed } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

//importing image
import img6 from '../../Assets/small.jpg'
import img7 from '../../Assets/room1.jpg'
import img8 from '../../Assets/large.jpg'

//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'




const Offers = [

  {
    id:1,
    imgSrc: img8,
    destTitle: 'Mechu picchu',
    location: 'Peru',
    price: '$7,500',
  },

  {
    id:2,
    imgSrc: img6,
    destTitle: 'Guanjuao',
    location: 'mexico',
    price: '$5,564',
  },

  {
    id:3,
    imgSrc: img7,
    destTitle: 'Angwar kot',
    location: 'Combodia',
    price: '$8,564',
  },

]


const Offer = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])




  return (
    

      <section className='offer container section'>
        <div className='secContainer'>

          <div data-aos='fade-up' data-aos-duration='2000' className='secIntro'>
            <h2 className='secTitle'>
              Special Offer!!
            </h2>
            <p>
            That’s correct!
            We’re so determined to make your experience at our hotel a charm,
            </p>
          </div>        



      
          <div className='mainContent grid'>

          {
            Offers.map(({id, imgSrc, destTitle, location, price})=>{
              return(

                <div data-aos='fade-up' data-aos-duration='3000' className='singleOffer'>
                    <div className='destImage'>
                      <img src={imgSrc} alt='{destTitle}' />

                      <span className='discount'>
                        30% Off
                      </span>
                    </div>

                  <div className='offerBody'>
                    <div className='price flex'>
                      <h4>
                        {price}
                      </h4>
                      <span className='status'>
                        For Rent
                      </span>
                    </div>

                    <div className='amenities flex'>
                      <div className='singleAmenity flex'>
                      <IoBed className='icon'/>
                      <small>2 Beds</small>
                      </div>
                      <div className='singleAmenity flex'>
                      <MdBathtub className='icon'/>
                      <small>1 Bathroom</small>
                      </div>
                      <div className='singleAmenity flex'>
                      <FaWifi className='icon'/>
                      <small>Wifi</small>
                      </div>
                      <div className='singleAmenity flex'>
                      <FaCar className='icon'/>
                      <small>PickUp - Drop</small>
                      </div>
                    </div>

                    <div className='location flex'>
                    <FaLocationDot className='icon' />
                      <small>{location}, Bangalore</small>
                    </div>

                    <button className='btn flex'>
                      View Details
                    <FaArrowRight className='icon'/>
                    </button>
                  </div>
                </div>

              )
            })
          }
                  
          </div>
        </div>
      </section>


  )
}

export default Offer
