import React, { useState } from 'react'
import data from "../data.json";


export const Lidman = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
        <h4>Lidmanpriset</h4>
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
)  
}