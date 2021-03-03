import React from 'react'
import { Link } from 'react-router-dom'

import { Header } from 'components/Header'


export const Startsida = () => {
  return (
    <section className="start-container">
      <Header />
      <article className="uppdrag">
        <h2>Akademins uppdrag</h2>
          <p>Bild och Ord Akademi är en informationsakademi, som grundades 1983 på initiativ av lexikografen Sven Lidman för att möta ett upplevt behov av en institution som "vårdar språket och kreativiteten i ord- och bildkommunikationen".</p>
        <div className="link-element">
          <Link to="/historia">
            <img className="arrow" src="assets/white-right-arrow.svg" alt="arrow-link"></img>
            <p>Akademins historia</p>
          </Link>
        </div>
      </article>

      <article className="pristagare">
        <h2>Pristagare</h2>
          <h3>Bibi Rödöö</h3>
          <h3>Anders Hansen</h3>
        <div className="link-element">
          <Link to="/priser">
            <img className="arrow" src="assets/black-right-arrow.svg" alt="arrow-link"></img>
            <p>Tidigare priser</p>
          </Link>
        </div>
      </article>

      <article className="ledamoter">
        <h2>Ledamöter</h2>
        <div className="link-element">
          <Link to="/ledamöter">
            <img className="arrow" src="assets/white-right-arrow.svg" alt="arrow-link"></img>
            <p>Akademins stolar</p>
          </Link>
        </div>
      </article>
    </section>
  )
}