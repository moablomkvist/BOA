import React from 'react'
import { useHistory } from 'react-router-dom'

export const TillbakaKnapp = () => {

    const history = useHistory();
  
    const handleClick = () => {
      history.push("/");
    }

  return (
      <div className="back-link-element">
        <a className="back-link" onClick={handleClick}>
          <img className="arrow" src="assets/left-arrow.svg" alt="arrow-link" />
          <p className="back-text">Tillbaka</p>
        </a>
      </div>
  )
}

