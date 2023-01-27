import React from 'react'
import style from "../detalle/pokedex.module.css";
import { icons } from "../../assets/iconsTypes.js";
export default function Pokedex({data}) {
  console.log(data,'info');
  return (
    <div className={style.container}>
          <section className={style.containerImage}>
            <div className={style.infoId}>
              <p>#{data.id}</p>
              <p>{data.name}</p>
            </div>
            <div className={style.mid}>
              <figure className={style.img}>
                <img src={data.image} alt={data.name} />
              </figure>
              <div>
                <fieldset>
                  <legend>basic information</legend>
                  <ul>
                    <li>weight: {data.weight}</li>
                    <li>height: {data.height}</li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Stats</legend>
                  <ul>
                    <li>hp: {data.hp}</li>
                    <li>speed: {data.speed}</li>
                    <li>defense {data.defense}</li>
                    <li>attack {data.attack}</li>
                  </ul>
                </fieldset>
                <div>
                  <div className={style.icono}>&#9825;</div>
                </div>
              </div>
            </div>
            <div className={style.containerType}>
              <div className={style.typeText}>
                <p>Type</p>
              </div>
              <div className={style.containerIcon}>
                {data.types?.map((el) => {
                  return (
                    <div className={style.icon}>
                      <span>{el}</span> <img src={icons[el]} alt={el}/>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          
        </div>
  )
}
