import React from 'react';  //to communicate with the component
import ReactDOM from 'react-dom'; //to communicate with the DOM
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
// ===================================================================

// Create a new component this component should produce some HTML
// this create a class of the App but in order to render it on the DOM , you need to instantiate an insatance of the class App
const App = () => {
  return <div>Hello!</div>
}


// take this component's generated HTML, find a target to put it on the page (in the DOM) (target=container) , you will insert the App in the container on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
