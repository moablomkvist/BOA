import React from 'react'

import { TillbakaKnapp } from 'components/TillbakaKnapp'

export const Ledamoter = () => {
  return(
    <section className="ledamöter-wrapper">
    <TillbakaKnapp />
    <article className="akademins-stolar">
      <h1>Akademins stolar</h1>
      <p>
        I akademin sitter välrenommerade personer inom olika kreativa verksamhetsområden.
        Journalister, copywriters och redaktörer.
        Arkitekter, konstnärer och fotografer. 
        Producenter, illustratörer och filmregissörer.
        Hantverken är spridda men det som förenar är att alla bidrar till ett skapande inom bild eller ord.
      </p>
    </article>
    <article className="listade-ledamöter">
      <h3>Invalda ledamöter</h3>
      <ul>
        <li>Tom Alandh, journalist och dokumentärfilmare</li>
        <li>Jan-Erik Ander, tecknare och creative director</li>
        <li>Solbritt Benneth, arkeolog</li>
        <li>Bo Bergström, art director</li>
        <li>Caroline Birgersson, copywriter och utbildare</li>
        <li>Moa Blomkvist, copywriter och utbildare</li>
        <li>Anna Clarén, fotograf</li>
        <li>Kristin Dahl, filosofie doktor</li>
        <li>Anders Engman, fotograf</li>
        <li>Bobo Engström, arkitekt</li>
        <li>Maria Eriksson, filmregissör</li>
        <li>Björn Fjaestad, publicist</li>
        <li>Marcus Gärde, grafisk designer</li>
        <li>Catharina Grünbaum, filosofie hedersdoktor och språkvårdare</li>
        <li>Bengt Gullbring, art director</li>
        <li>Owe Gustafson, illustratör och filmtecknare</li>
        <li>Anders Hanser, fotograf och filmare</li>
        <li>Sture Hegefors, tecknare</li>
        <li>Cecilia Johansson, planner</li>
        <li>Peder Jonsson, teknologie doktor</li>
        <li>Björn Karlsson, redaktör</li>
        <li>Christina Knight, creative director</li>
        <li>Carolina Laudon, typsnittstecknare & art director</li>
        <li>Inga Lewenhaupt, filosofie doktor och teater- och musikforskare</li>
        <li>Krister Nathanaelson, tv-producent</li>
        <li>Elisabeth Reslegård, projektledare</li>
        <li>Annika Röhl, grafisk redaktör</li>
        <li>Anna Schytt, vetenskapsjournalist</li>
        <li>Georg Sessler, konstnär</li>
        <li>Richard Wahlund, professor</li>
        <li>Bengt Wanselius, fotograf och filmare</li>
        <li>Marianne von Baumgarten-Lindberg, journalist och förläggare</li>
        <li>Torgny Wärn, journalist och tecknare</li>
      </ul>
    </article>
  </section>
)
}