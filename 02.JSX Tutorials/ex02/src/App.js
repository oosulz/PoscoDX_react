import React from "react";
import Header from "../../ex03/src/Header";
//*

React.createElement("div", Header, null, React.createElement);

function App() {
  return (
    <div>
      <h1>Ex02</h1>
      <p>특징 II: Sigle Root</p>
    </div>
  );
}

/*/

// after component App transpiled 
function App() {
    return React.createElement('div', null, React.createElement('h2', null, 'Ex02'), React.createElement('p', null, '특징 II: Sigle Root'));
}

//*/

//
// Error: Adjacent JSX elements must be wrapped in an enclosing tag
//
// function App() {
//     return (
//         <h2>Ex02</h2>
//         <p>특징 II: Sigle Root</p>
//     )
// }
//
// function App() {
//     return (
//         React.createElement('h2', null, 'Ex02')
//         React.createElement('p', null, '특징 II: Sigle Root')
//     );
// }
//

export { App };
