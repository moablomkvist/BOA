import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <section className="header">
      <Link to ="/">
        <img className="logo" src="./assets/BOA.png" alt="logo"/>
      </Link>
      <p className="sub-heading">Bild & Ord Akademin</p>
    </section>
  )
}