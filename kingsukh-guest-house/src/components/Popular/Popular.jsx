import React, {useEffect} from 'react'
import './popular.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";


//importing Images
import img2 from '../../Assets/baranti.webp'
import img5 from '../../Assets/baranti.webp'
import img7 from '../../Assets/baranti.webp'
import img9 from '../../Assets/baranti.webp'

//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
  id:1,
  imgSrc: img2,
  destTitle: 'meccu piku',
  location: 'peru',
  grade: 'CULTRUAL RELAX',
  },

  {
    id:2,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Maxico',
    grade: 'CULTRUAL RELAX',
  },

  {
    id:3,
    imgSrc: img7,
    destTitle: 'Angkor wat',
    location: 'Cambodia',
    grade: 'CULTRUAL RELAX',
  },

  {
    id:4,
    imgSrc: img9,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTRUAL RELAX',
  }
] 


const Popular = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])



  return (
    
    <section className='popular section container'> 

      <div className='secContainer'>
        <div className='secHeader flex'>
          <div data-aos='fade-right' data-aos-duration='2500' className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
            Get a promotional discount as high as 25% OFF!
            </p>
          </div>

          <div data-aos='fade-left' data-aos-duration='3000' className='iconsDiv flex'>
          <FaArrowLeft className='icon leftIcon'/>
          <FaArrowRight className='icon'/>
          </div>

        </div>

        <div className='mainContent grid'>
          

          {
            Data.map(({id, imgSrc, destTitle, location, grade})=>{
              return(

            <div data-aos='fade-up' className='singleDestination'>
            <div className='destImage'>
             <img src={imgSrc} alt='Image Title' />

              <div className='overLayInfo'>
               <h3>{destTitle}</h3>
               <p>
               {location}
                </p>

                <FaArrowRight className='icon' />

              </div>
           </div>


            <div className='destFooter'>
              <div className='number'>
                0{id}
              </div>

              <div className='destText flex'>
                <h6>
                  {location}
                </h6>
                <span className='flex'>
                  <span className='dot'>
                  <GiSpookyHouse className='icon' />
                  </span>
                  Kingsukh G.H
                </span>
              </div>

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

export default Popular
