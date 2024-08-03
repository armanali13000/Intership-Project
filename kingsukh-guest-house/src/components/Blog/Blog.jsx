import React, {useEffect} from 'react'
import './blog.css'

import { FaArrowRight } from "react-icons/fa";


//importing Images
import img from '../../Assets/header.jpg'
import img1 from '../../Assets/palash.webp'
import img2 from '../../Assets/ayodhya.webp'
import img3 from '../../Assets/baranti.webp'


//importing AOS(Animate on Scroll)
import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
  {
    id:2,
    postImage: img,
    title: 'The most common mistakes when managing personal finances',
    desc: 'The ability to manage money competently is especially valuable quality in the conditions of financial crisis, when the purchasing power of the population is shrinking, inflation is rising, and currency exchange rates are completely unpredictable. Below are the common mistakes related to money affairs along with financial planning advice to help manage your own finances properly.',
    },
  
    {
      id:2,
      postImage: img1,
      title: 'Methods of the recruitment',
      desc: 'Search of staff is not an easy task. According to the departmental heads of personnel management words, in order to find a personnel who will correspond to the relevant customer needs and requirements, it is necessary to carry out a great job.',
    },
  
    {
      id:3,
      postImage: img2,
      title: 'Overalls with logo as a method of advertising',
      desc: 'Overalls bearing the company logo are related to economy and practicality. A preference of corporate style involves a significant increase of costs for development of design solutions, customized tailoring, selection of necessary materials and so on.',
    },
  
    {
      id:4,
      postImage: img3,
      title: 'The main objectives of the marketer',
      desc: 'The modern market is absolutely unpredictable. And yet it lives according to strict laws. The marketers need to be known to achieve maximum results in their business - that is the main task of the marketer.',
    }
]


const Blog = () => {

  useEffect(()=>{

    Aos.init({duration: 2000})

  }, [])


  return (
    <section className='blog container section'>
      <div className='secContainer'>

        <div className='secIntro'>
          <h2 data-aos='fade-up' data-aos-duration='2000' className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos='fade-up' data-aos-duration='2500'>
          Single room with balcony
          </p>
        </div>

        <div className='mainContainer grid'>
          
        {
          Posts.map(({id, postImage, title, desc})=>{
            return(

              <div data-aos='fade-up' data-aos-duration='2000' className='singlePost grid'>
                <div className='imgDiv'> 
                  <img src={postImage} alt={title} />  
                </div>

                <div className='postDetails'>
                  <h3 data-aos='fade-up' data-aos-duration='3000'>
                    {title}
                  </h3>
                  <p data-aos='fade-up' data-aos-duration='4000'>
                  {desc}
                  </p>
                </div>

                <a data-aos='fade-up' data-aos-duration='4500' href='#' className='flex'>
                Read More
                <FaArrowRight className='icon' />
                </a>
              </div>

            )
          })
        }
        </div>
      </div>  
    </section>
  )
}

export default Blog
