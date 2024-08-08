import React, {useState} from 'react';
import './navbar.css'
import { GiSpookyHouse } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  const [active, setActive] = useState('navBar') 
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  //for remove navbar
  const removeNav =()=>{
    setActive('navBar')
  }



  //for add background color to the navbar
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10)
    {
      setTransparent('header activeHeader')
    }
    else
    {
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)



  return (
    
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv'>
          <a href='#' className='logo'>
            <h1 className='flex'><GiSpookyHouse className='icon' />Kingsukh Guest House</h1>
          </a>
        </div>
        
        <div className={active}>
          <ul className='navLists flex'>


            <li className='navItem active'>
              <a href='' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='' className='navLink'>Product</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Resources</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Contact</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Blog</a>
            </li>
          </ul>

          <div onClick={removeNav} className='closeNavbar'>
          <IoCloseCircle className='icon'/>
          </div>
        </div>


        <div onClick={showNav} className='toggleNavbar'>
        <TbGridDots className='icon'/>
        </div>

      </div>
    </section>

  )
}

export default Navbar
