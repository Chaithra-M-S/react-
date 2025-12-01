import React from 'react';
import { createRoot } from 'react-dom/client';





/* <div id='parent'>
  <div id='child1'>
    <h1></h1>
    <h2></h2>
    <h3></h3>
  </div>
  <div id='child2'>
    <h1></h1>
    <h2></h2>
    <h3></h3>
  </div>
</div> */






const heading = React.createElement('div', { id: 'parent' },
  [
    React.createElement('div', { id: 'child1', key: 'child1' }, [
      React.createElement('h1', { key: 'h1-1' }, "I amm h1 tag"),
      React.createElement('h2', { key: 'h2-1' }, "I am 2 Tag"),
      React.createElement('h3', { key: 'h3-1' }, "I am h3 Tag")
    ],
    ),
    React.createElement('div', { id: 'child2', key: 'child2' }, [
      React.createElement('h1', { key: 'h1-2' }, "I am h1 tag"),
      React.createElement('h2', { key: 'h2-2' }, "I am h2 Tag"),
      React.createElement('h3', { key: 'h3-2' }, "I am h3 Tag")
    ],
    )
  ]
);




// const heading=React.createElement('h1',{id:'heading',xyz:"abc"},'Hello World From React !!');

console.log(heading); // cReatying the object
const root = createRoot(document.getElementById('root'));
root.render(heading);
