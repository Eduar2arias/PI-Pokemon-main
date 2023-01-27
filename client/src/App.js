import "./App.css";
import { Route, Link } from "react-router-dom";
import  Home from './components/home/Home.jsx'
import { connect } from "react-redux";
import { getPokemon } from "./redux/actions/action";
import React from "react";

export default function App(props) {
  // const {Pokemon} = props
  
  // React.useEffect( ()=>{
  //   console.log('me subo')
  //     props.getPokemon()
  // },[])
  return (
    <div className="App">
      <Route path="/" exact>
        <h1>Henry Pokemon</h1>
        <Link to="/home/pokemons">
          <input type="button" value="Start!" />
        </Link>
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


