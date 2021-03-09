import React from 'react'

import { TillbakaKnapp } from 'components/TillbakaKnapp'
import { Visitkort } from 'components/Visitkort'

export const Ledamoter = () => {
  return(
    <section className="ledamöter-wrapper">
    <TillbakaKnapp />
    <article className="akademins-stolar">
      <h1>Akademins stolar</h1>
      <p className="akademins-stolar-innehåll">
        I akademin sitter välrenommerade personer inom olika kreativa verksamhetsområden.
        Journalister, copywriters och redaktörer.
        Arkitekter, konstnärer och fotografer. 
        Producenter, illustratörer och filmregissörer.
        Hantverken är spridda men det som förenar är att alla bidrar till ett skapande inom bild eller ord.
      </p>
    </article>
    <article className="listade-ledamöter">
      <h3 className="listade-ledamöter-innehåll">BOA:s ledamöter</h3>
        <Visitkort />
    </article>
  </section>
)
}