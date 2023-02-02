import React from "react";
import { Route, Link } from "react-router-dom";
import style from "./landing.module.css";
import imgIndex from "../../assets/Logo_Pokémon_Presents.png";

export default function Landing() {
  return (
    <div className={style.bground}>
      <Route path="/">
        <div className={style.first}>
          probando
          <img src={imgIndex} alt={imgIndex} />
        </div>
        <div className={style.second}>
          <Link className={style.styleLink} to="/home/pokemons">
            <div className={style.btn}> Start</div>
          </Link>
          {/* <Route path="/home">
          <Home />
        </Route> */}
        </div>
      </Route>
    </div>
  );
}
