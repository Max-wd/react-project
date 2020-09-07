import React from 'react';


const HelloApp = () => {
  const greeting  = 'Hello, React!!!';
  const again = 'Again!'

  return (
    <div> 
      <h1>{greeting}</h1>
      <button onClick={() => alert(`${greeting} ${again}`)}>Click me!</button>
    </div>    
  )
}
export default HelloApp;
