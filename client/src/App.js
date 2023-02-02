// import "./App.css";
import { Route} from "react-router-dom";
import  Home from './components/home/Home.jsx'

import React from "react";
// import landing from './assets/landing.jpg'
import  './App.css'
import Landing from "./components/landing/Landing.jsx";

export default function App(props) {

  return (
    <div className="App">
      <Route path="/" exact>
      <Landing/>
      </Route>

      <Route path='/home'>
        <Home  />
      </Route>
    </div>
  );
}

// export const mapStateToProps = (state) => {
//   return {
//     Pokemon: state.Pokemon,
//   };
// };

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     getPokemon: () => dispatch(getPokemon()),
//   };
// };

// export default connect(null, mapDispatchToProps)(App);


