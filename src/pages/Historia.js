import React from 'react'

import { TillbakaKnapp } from 'components/TillbakaKnapp'

export const Historia = () => {
  return (
    <section className="historia-wrapper">
      <TillbakaKnapp />
      <article className="akademins-uppdrag">
        <h1 className="uppdraget">Uppdraget</h1>
        <p className="uppdraget">
          Bild och Ord Akademin är ett tvärvetenskapligt forum för olika yrkesgrupper inom informationsområdet, med uppgift att motverka specialisering och fragmentisering. 
          Akademin ska uppmuntra och ge stöd åt dagens informatörer, samtidigt som den ska förbättra utbildningen av morgondagens.
        </p>
      </article>
      <article className="historia">
      <h3 className="underrubrik">Sven Lidman – akademins grundare</h3>
        <p className="historia-content">
          Initiativet till Bild och Ord Akademin togs av <a href="https://sv.wikipedia.org/wiki/Sven_Lidman_(lexikograf)">Sven Lidman</a> år 1983.  
          Han började sin yrkeskarriär hos Natur & Kulturs grundare Johan Hansson. Det blev början på ett omfattande förnyelsearbete med det som skulle komma att bli
          Sven Lidmans stora insats som producent: det moderna bildlexikonet. 
          I de flesta svenska hem finns ett uppslagsverk som Sven Lidman ligger bakom och det totala antalet sålda exemplar, inklusive de utländska utgåvorna, uppgår idag till 25 miljoner volymer.
        </p>
      </article>
    </section>
  )
}




