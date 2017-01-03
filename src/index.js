import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import API_KEY from './../config';
//import API_KEY2 from './../config.js';

// var API_KEY = require('./../config.json');
//const API_KEY = ;

// Create a new component. This component should produce some HTML.

// const vs var : 
//  - they both declare a variable, but with const, we are saying 
//    that this is the final value of this variable. Therefore we call it constant.
// const App = function() { 
//   return <div>Hi!</div>; 
// }

// NEW ES6 syntax for function
//  console.log(API_KEY.YOUTUBE_API_KEY);
// debugger;
const App = () => { 
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// jsx : 
//    - the HTML in the function is what is referred as jsx. 
//    - jsx is a subset of javascript that allow us to write what looks like HTML
//      inside our javascript. (but is really, behind the scene, javascript) 

// Take this component's generated HTML and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
