import React, { useState } from 'react'


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
    <>
      <button onClick={}>Lidmanpriset</button>
    </>
  )
}