import React, { useState } from 'react';
import data from '../data.json';


export const Priser = () => {
const [isOpen, setOpen] = useState(false);
  
return (
  <section className="accordion-wrapper">
    <div className={`accordion-title ${isOpen ? "open" : ""}`}
      onClick={() => setOpen(!isOpen)}>
        <h3 className="lidman-rubrik">Lidmanpriset</h3>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
    {data.priser.lidmanpriset.map(lidmanpriset => { 
    return (
      <section key={lidmanpriset.year}>
      <p className="accordion-content" > {lidmanpriset.year} {lidmanpriset.pristagare}</p>
      </section>
      )
  })} 
  </div>
  </div>
  </section>
)}

