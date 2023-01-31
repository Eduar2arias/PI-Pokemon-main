import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonById } from "../../redux/actions/action.js";
import style from "./card.module.css";
import {icons} from '../../assets/iconsTypes'

export default function Card(props) {
  console.log(props);
  const { data } = props;
  const dispatch = useDispatch();
  function handleClickId(e, id) {
    // e.preventDefault()
    dispatch(getPokemonById(id));
  }

  return (
    <div className={style.container}>
      <div className={style.containerImage}>
        <img src={data.image} />
      </div>
      <div className={style.containerName}>
        <div>name : {data.name}</div>
      </div>
      <div className={style.containerInfo}>
        <div className={style.containerStats}>
          <div>
          <span>hp:</span>
          <span>{data.life}</span>
          </div>
          <br/>
          <div>
          <span>attack:</span>
          <span>{data.stroke}</span>
          </div>
        </div>
        <div className={style.containerType}>
          {data.types?.map( el => 
          <div className={style.typeIcon}>
            {console.log(icons[el.name])}
            <img src={icons[el.name]}/>
          </div>
          ) }
        </div>
      </div>
      <div className={style.containerLink}>
        <Link
          to={`/home/info/${data.id}`}
          onClick={(e) => handleClickId(e, data.id)}
        >
          <p>More info</p>
        </Link>
      </div>
    </div>
  );
}
