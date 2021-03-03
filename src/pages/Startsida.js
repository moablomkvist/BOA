import React from 'react'
import { Link } from 'react-router-dom'

export const Startsida = () => {
  return (
    <section className="start-container">
      <article className="uppdrag">
        <h2>Akademins uppdrag</h2>
        <p>Bild och Ord Akademin är en informationsakademi, som grundades 1983 på initiativ av lexikografen Sven Lidman för att möta ett upplevt behov av en institution som "vårdar språket och kreativiteten i ord- och bildkommunikationen".</p>
        <Link to="/historia" className="white-arrow-link-element">
          <img className="arrow" src="assets/white-right-arrow.svg" alt="arrow-link"/>
          <p>Akademins historia</p>
        </Link>
      </article>

      <article className="pristagare">
        <h2>Pristagare</h2>
        <h3>Bibi Rödöö</h3>
        <h3>Anders Hansen</h3>
        <Link to="/priser" className="black-arrow-link-element">
          <img className="arrow" src="assets/black-right-arrow.svg" alt="arrow-link"/>
          <p>Tidigare priser</p>
        </Link>
      </article>

      <article className="ledamoter">
        <h2>Ledamöter</h2>
        <Link to="/ledamöter" className="white-arrow-link-element">
          <img className="arrow" src="assets/white-right-arrow.svg" alt="arrow-link"/>
          <p>Akademins stolar</p>
        </Link>
      </article>
    </section>
  )
}