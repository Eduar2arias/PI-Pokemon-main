import React, { useEffect, useState } from "react";
import style from "../detalle/pokedex.module.css";
import { icons } from "../../assets/iconsTypes.js";
import {addFavorite, getPokemon} from '../../redux/actions/action.js'
import { useDispatch } from "react-redux";
export default function Pokedex({ data }) {
  const [colorHeart, setColorHeart] =useState(false)
  const [toogle, setToogle] =useState(true)
  const dispatch = useDispatch()
 
  

  useEffect(()=>{
    dispatch(getPokemon())
    
  },[dispatch])
  const btnAdd =(e , id)=>{
    
    if (toogle) {
     
      // toogleHeart = !toogleHeart
      setToogle(false)
      // toogle =!toogle
      
      setColorHeart(true)
      dispatch(addFavorite(id))

      // console.log(toogleHeart);

    }else{
      console.log('pasee');
      setToogle(true)
      setColorHeart(false)
      // toogle =!toogle
    }
  }

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
          <div className={style.contents}>
            <div className={style.contentsChild}>
              <fieldset>
                <legend>basic information</legend>

                <span className={style.infoFieldset}>weight:</span>
                <span>{data.weight}</span>
                <br />
                <span className={style.infoFieldset}>height:</span>
                <span>{data.height}</span>
              </fieldset>
              <br />
              <fieldset>
                <legend>Stats</legend>

                <span className={style.infoFieldset}>hp:</span>
                <span>{data.life}</span>
                <br />
                <span className={style.infoFieldset}>speed:</span>
                <span>{data.speed}</span>
                <br />
                <span className={style.infoFieldset}>defense:</span>
                <span>{data.defense}</span>
                <br />
                <span className={style.infoFieldset}>attack:</span>
                <span>{data.stroke}</span>
              </fieldset>
              <div className={style.containerHeart}>
                <div className={ colorHeart ? `${style.heartActive} ${style.heart}`: `${style.heart}`} onClick={(e)=> btnAdd(e,data.id)}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.containerType}>
          <div className={style.typeText}>
            <p>Type</p>
          </div>
          <div className={style.containerIcon}>
            {data.Types?.map((el) => {
              return (
                <div className={style.icon}>
                  <span>{el.name}</span> <img src={icons[el.name]} alt={el.name} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
