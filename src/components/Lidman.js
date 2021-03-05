import React, { useState } from 'react'
import data from "../data.json";


export const Lidman = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
          <div className="list-title-icon">
            <img className="title-icon" src="assets/list-icon.svg" alt="list-icon"/>
            <h4>Lidmanpriset</h4>
          </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
    {data.priser.lidmanpriset.map(lidmanpriset => { 
    return (
      <section key={lidmanpriset.year}>
          <div className="accordion-content"> 
          <h4>{lidmanpriset.year}</h4> 
          <p>{lidmanpriset.pristagare}</p>
        </div>
      </section>
      )
  })} 
  </div>
  </div>
  </section>
)  
}