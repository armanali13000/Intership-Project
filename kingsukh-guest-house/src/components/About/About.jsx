import React, {useEffect} from 'react'
import './about.css'

//importing Images
import img1 from '../../Assets/customer.jpg'
import img2 from '../../Assets/hiking.png'
import img3 from '../../Assets/mountain.jpg'


//importing video
import video from '../../Assets/Mountain video.mp4'


//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])


  return (
    
      <section className='about section'>
        <div className='secContainer'>
          <h2 className='title'>
            Why Hikings!
          </h2>

          <div className='mainContent container grid'>
            <div data-aos='fade-up' data-aos-duration='2000' className='singleItem'>
              <img src={img3} alt='Image Name' />
              <h3>100+ Mountains</h3>
              <p>
              Here, we always make sure that you will have any of your needs satisfied,
               be it a comfortable hotel room with a strong WiFi signal and a diligent room service.
              </p>
            </div>   

            <div data-aos='fade-up' data-aos-duration='3000' className='singleItem'>
              <img src={img2} alt='Image Name' />
              <h3>1000+ Hikings</h3>
              <p>
              Here, we always make sure that you will have any of your needs satisfied,
               be it a comfortable hotel room with a strong WiFi signal and a diligent room service.
              </p>
            </div>  

            <div data-aos='fade-up' data-aos-duration='4000' className='singleItem'>
              <img src={img1} alt='Image Name' />
              <h3>2000+ Customers</h3>
              <p>
              Here, we always make sure that you will have any of your needs satisfied,
               be it a comfortable hotel room with a strong WiFi signal and a diligent room service.
              </p>
            </div>          
          </div>

          <div className='videoCard container'>
            <div className='cardContent grid'>

              <div data-aos='fade-right' data-aos-duration='2000' className='cardText'>
                <h2>
                  Wonderful House experience 
                </h2>
                <p>
                Here, we always make sure that you will have any of your needs satisfied, 
                be it a comfortable hotel room with a strong WiFi signal and a diligent room service, 
                a dining and lounge zone or any additional Features a traveller might want…
                </p>
              </div>

              <div data-aos='fade-left' data-aos-duration='2000' className='cardVideo'>
                <video src={video} autoPlay loop muted type='video/mp4'></video>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default About
