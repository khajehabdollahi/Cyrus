import React, { useState } from 'react';
import { UncontrolledCarousel, NavLink } from 'reactstrap';
import ImageSlide from './ImageSlide'
import './index.css'
const items = [
  {
    src: './images/door.jpg',
 
  },
  {
    src: './images/Kebab.jpg',
   
  },
   
  {
    src: './images/cheloJoojeh.jpg',
   
  },
    {
    src: './images/Gho.jpg',
 
  },
 
  {
    src: './images/Keb.jpg',
    
  },
  {
    src: './images/barg.jpg',
   
  },

  {
    src: './images/s.jpg',
    
  }
];

const Home = () => {
  return (
    <div  >
      { <UncontrolledCarousel items={items} className="d-flex vh-150 slide-disp"/>  }
      <ImageSlide/>
    </div>
  )
}

export default Home
