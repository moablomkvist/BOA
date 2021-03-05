import React from 'react';

import { Lidman } from 'components/Lidman'
import { Encyklopedi } from 'components/Encyklopedi'
import { TillbakaKnapp } from 'components/TillbakaKnapp'

export const Priser = () => {
  return (
    <>
      <TillbakaKnapp />
      <article className="akademins-priser">
        <h1>Priser</h1>
        <p>
          Ända sedan 1980-talet har våra två priser delats ut till pristagare av bred rang. 
          På scen har det stått allt ifrån barnboksförfattare, psykiatriker och dokumentärfilmare till programchefer, professorer och modellmakare. 
          Gemensamt har varit att de bidragit till att berika med bild och ord.
        </p>
      </article>

      <article className="priser">
        <h3>Vinnare av Lidmanpriset</h3>
        <p>
          Som belönar god information i ord och bild.
        </p>
        <Lidman />
        <h3>Vinnare av Ann-Marie Lunds Encyklopedipris</h3>
        <p>
          För folkbildande insatser och ett populärt berättande av encyklopedisk art och bredd.  
        </p>
        <Encyklopedi />
      </article>
    </>
  )
}

