import React, { useState } from 'react'
import data from "../data.json";


export const Encyklopedi = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
          <div className="list-title-icon">
            <img className="title-icon" src="assets/list-icon.svg" alt="list-icon"/>
            <h4>Encyklopedipriset</h4>
          </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
    {data.priser.encyklopedipriset.map(encyklopedipriset => { 
    return (
      <section key={encyklopedipriset.year}>
        <div className="accordion-content"> 
          <h4>{encyklopedipriset.year}</h4> 
          <p>{encyklopedipriset.pristagare}</p>
        </div>
      </section>
      )
  })} 
  </div>
  </div>
  </section>
)  
}