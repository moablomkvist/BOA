import React, { useState } from 'react';
import data from '../data.json';


export const Priser = () => {
const [active, setActive] = useState(0);
  
let indexPlus;

const eventHandler = (e, index) => {
  e.preventDefault();
  setActive(index)
  };

const IndexCount = (index) => {
indexPlus = index + 1;
  return indexPlus
}


return (
  <div>
    <form>
      { data.map((tab, index) => (
        <div key={index}> 
        <h3>
        <button 
          onClick={(e) => eventHandler(e, index)}
          className={ active === index ? 'active' : 'inactive' }
          aria-expanded={ active === index ? 'true' : 'false' }
          aria-controls= { 'sect-' + IndexCount(index) }
          aria-disabled= { active === index ? 'true' : 'false' }
          tabIndex={IndexCount(index)}
        > 
        <span className="title-wrapper">{tab.title}
          <span className={ active === index ? 'plus' : 'minus'}></span>
        </span>
        </button>
        </h3>
    </div>
    ))}
    </form>
  </div>
)
}