import React from 'react'
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom'

export const TillbakaKnapp = () => {
//     const history = useHistory();
  
//     const handleClick = () => {
//       history.push("/");
//     }

  return (
      <div className="back-link-element">
        <Link to="/" className="back-link"  //onClick={handleClick}
        >
          <img className="arrow" src="assets/left-arrow.svg" alt="arrow-link" />
          <p className="back-text">Tillbaka</p>
        </Link>
      </div>
  )
}

