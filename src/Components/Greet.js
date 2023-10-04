// How to create a div, store elements and view it in the concole(DOM)

import React from 'react';

const Greet = () => {
  return React.createElement('div', {id: "class", class: "hey"},
  React.createElement("h1", null, "the text"),
  React.createElement("p", null, "text area")); 
    
  
}

export default Greet;