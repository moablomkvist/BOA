import React from "react";

import { Lidman } from "components/Lidman";
import { Encyklopedi } from "components/Encyklopedi";
import { TillbakaKnapp } from "components/TillbakaKnapp";

export const Priser = () => {
  return (
    <section>
      <article className="akademins-priser">
        <h1 className="akademins-priser-content">Priser</h1>
        <p className="akademins-priser-content">
          Ända sedan 1980-talet har våra två priser delats ut till pristagare av
          bred rang. På scen har det stått allt ifrån barnboksförfattare,
          psykiatriker och dokumentärfilmare till programchefer, professorer och
          modellmakare. Gemensamt för alla pristagare har varit att de berikar
          genom antingen bild eller ord.
        </p>
      </article>

      <article className="priser">
        <h3 className="underrubrik">Lidmanpriset</h3>
        <p className="akademins-priser-content">
          Belönar god information i ord och bild.
        </p>
        <Lidman />
        <h3 className="underrubrik">Ann-Marie Lunds Encyklopedipris</h3>
        <p className="akademins-priser-content">
          Belönar folkbildande insatser och ett populärt berättande av
          encyklopedisk art och bredd.
        </p>
        <Encyklopedi />
      </article>
      <TillbakaKnapp />
    </section>
  );
};
