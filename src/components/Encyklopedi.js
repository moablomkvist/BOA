import React, { useState } from 'react'
import data from "../data.json";


export const Encyklopedi = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
        <h4>Ann-Marie Lunds Encyklopedipris</h4>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
    {data.priser.encyklopedipriset.map(encyklopedipriset => { 
    return (
      <section key={encyklopedipriset.year}>
      <p className="accordion-content" > {encyklopedipriset.year} {encyklopedipriset.pristagare}</p>
      </section>
      )
  })} 
  </div>
  </div>
  </section>
)  
}