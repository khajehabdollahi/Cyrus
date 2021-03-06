import React, { useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const itemsFood = [
  {
    image:'~/images/door.jpg',
    altText: 'Slide 1sss',
    caption: 'Slide 1ss',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    
   image:  './images/door.jpg',
    altText: 'Slide 2x',
    caption: 'Slide 2x',
    header: 'Slide 2 xHeader',
    key: '2'
  },
  {
    image: './images/door.jpg',
    altText: 'Slide 3z',
    caption: 'Slide 3z',
    header: 'Slide 3 zHeader',
    key: '3'
    
  }
];


const Food = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Food