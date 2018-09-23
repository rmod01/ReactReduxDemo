import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return(
      <div>
        <h1>ABOUT Section</h1>
        <p>Learning UI Framework</p>
        <p1>Started with Reactjs, was already aware of Nodejs and npm.</p1>
        <p>Realized that I have to go learn a lot of other enabling tools to make the developer environment amicable :) </p>
        <p></p>
        <p>......</p>
        <p></p>
        <br></br>
        <p>Conceptually - React, Facebook Flux and Redux</p>
        <br></br>
        <p>Then...</p>
        <p>1.JSX                   - Language to build React Component (can still use js to write React Compnent)</p>
        <p>2.Babel, babel-polyfill - Transpile ES6 -> ES5 (For old browser compatibility)</p>
        <p>3.Webpack               - Bundle the compiled js</p>
        <p>4.ESLint                - To lint js</p>
        <p>5.Express               - Dev server</p>
        <p>6.Thunk                 - Redux Thunk middleware for Async calls/promises</p>
        <p>7.Mocha                 - Testing</p>
        <p>Counting more...as the stack is still evolving</p>
        <p>Next on the list is Redux Saga</p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default AboutPage;
