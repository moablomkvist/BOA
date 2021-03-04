import React, { useState } from 'react';
import data from '../data.json';


export const Priser = () => {
const [active, setActive] = useState(false);
  


const eventHandler = (event) => {
  event.preventDefault();
  setActive(true)
  };


return (
  <section>
  {data.priser.lidmanpriset.map(lidmanpriset => { 
    return (
      <>
      <p>{lidmanpriset.year}</p>
      <p>{lidmanpriset.pristagare}</p>
      </>
      )
  })} 
  </section>
)}