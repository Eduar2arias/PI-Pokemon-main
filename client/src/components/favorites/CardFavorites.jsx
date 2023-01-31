import React from 'react'
import { Link } from "react-router-dom";
import style from "./cardFavorite.module.css";
import {icons} from '../../assets/iconsTypes'


export default function CardFavorites(props) {
    const {data , handleClickId} = props
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
            <img src={icons[el.name]}/>
          </div>
          ) }
        </div>
      </div>
      <div className={style.containerLink}>
        <Link
          to={`/home/info/${data.id}`}
        
        >
          <p>More info</p>
        </Link>
        <div  onClick={(e) => handleClickId(e, data.id)} >Delete</div>
      </div>
    </div>
  )
}

//<div className={style.container}>
//       <div className={style.containerImage}>
//         <img src={data.image} />
//       </div>
//       <div className={style.containerName}>
//         <div>name : {data.name}</div>
//       </div>
//       <div className={style.containerInfo}>
//         <div className={style.containerStats}>
//           <div>
//           <span>hp:</span>
//           <span>{data.life}</span>
//           </div>
//           <br/>
//           <div>
//           <span>attack:</span>
//           <span>{data.stroke}</span>
//           </div>
//         </div>
//         <div className={style.containerType}>
//           {data.types?.map( el => 
//           <div className={style.typeIcon}>
//             <img src={icons[el]}/>
//           </div>
//           ) }
//         </div>
//       </div>
//       <div className={style.containerLink}>
//         <Link
//           to={`/home/info/${data.id}`}
//           onClick={(e) => handleClickId(e, data.id)}
//         >
//           <p>More info</p>
//         </Link>
//       </div>
//     </div>








// import React from "react";
// import { useDispatch } from "react-redux";
// import { getPokemonById } from "../../redux/actions/action.js";


// export default function Card(props) {
//   console.log(props);
//   const { data } = props;
//   const dispatch = useDispatch();
//   function handleClickId(e, id) {
//     // e.preventDefault()
//     dispatch(getPokemonById(id));
//   }

//   return (
//     
//   );
// }