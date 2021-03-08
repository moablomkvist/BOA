import React from "react";

export const Footer = () => {
  return (
    <>
      <h2 className="footer-heading">Kontakt</h2>
      <div className="footer-wrapper">
        <section className="footer-section">
          <p className="footer-text">
            Preses och kanslichef
            <span>Elisabeth Lidman</span>
            <a href="mailto:b.o.akademin@gmail.com">b.o.akademin@gmail.com</a>
            072-747 06 06
          </p>
        </section>

        <section className="footer-section">
          <p className="footer-text">
            Bild och Ord Akademin
            <span>c/o Elisabeth Lidman</span>
            <span>Värtavägen 8</span>
            <span>115 24 Stockholm</span>
          </p>
        </section>
      </div>

      <section className="logo-section">
        <img className="footer-logo" src="./assets/BOA.png" alt="logo" />
      </section>
    </>
  );
};
