import React from 'react';
import './App.css';

// class Welcome extends React.Component {
//   render () {
//     return React.createElement('h1', {}, 'Hello World!');
//   }
// }

function Welcome() {
    return (
        React.createElement('div', {},
            React.createElement('h1', { className: "color" }, 'Hello World!')
        )
    )
}

export default Welcome;