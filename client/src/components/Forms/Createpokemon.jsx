import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Types from "../pokemons/Types";
import Checkboxs from "./Checkboxs";
import validate from "./controllerForm";
import style from "./createpokemon.module.css";
import { getTypes } from "../../redux/actions/action";
import axios from "axios";

export default function Createpokemon(props) {
  const refinput = useRef();
  const dispatch = useDispatch();
  const allTypes = useSelector((store) => store.types);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    type: [],
    height: "",
    weight: "",
    life: "",
    stroke: "",
    defense: "",
    speed: "",
  });
  const [errorData, setErrorData] = useState({
    name: "",
    image: "",
    type: [],
    height: "",
    weight: "",
    life: "",
    stroke: "",
    defense: "",
    speed: "",
  });
  useEffect(() => {
    dispatch(getTypes());
  }, []);
  // console.log(formData);
  const handlerChanged = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [property]: value });

    setErrorData(validate({ ...formData, [property]: value }));
    // setErrorData(validate( {...formData,[property]: value} ));
  };
  
  const handlerType = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    const arrType = formData.type.find((type) => type === value);
    console.log(arrType);
    if (!arrType) {
      setFormData({ ...formData, type: [...formData.type, value] });
    }
    console.log(formData);
  };

  function handleForm(e){
    e.preventDefault()
    try {
      axios.post('http://localhost:3001/pokemons',{...formData})
      // axios({
      //   method:'POST',
      //   url:'http://localhost:3001/pokemons',
      //   data:formData
      // })
      
    } catch (error) {
      console.log(error.message);
    }
  }

  // let clasInput = document.querySelectorAll(".check");
  // console.log(clasInput);
  // const changeCheck = (e) => {
  //   let limit = 0;
  //   let arr = [];
  //   for (let i = 0; i < clasInput.length; i++) {
  //     if (clasInput[i].checked === true) {
  //       limit++;
  //     }

  //   }

  //   if (formData.types.length+1 > 3) {
  //       setErrorData({ ...formData, types: "solo puedes seleccionar 3 typos" });
  //       e.target.disabled = true
  //       return false
  //     }
  //     if (formData.types.length+1 < 3) {
  //       // e.target.disabled = false
  //       setErrorData({ ...formData, types: "" });

  //     }
  //     console.log('pasee');
  //     // if (limit > 3) {
  //       //   setErrorData({ ...formData, types: "solo puedes seleccionar 3 typos" });
  //   //   return false;
  //   // } else {
  //   //   setErrorData({ ...formData, types: "" });
  //   // }
  //   // console.log(formData.types.length+1,'asdas');
  //   // if(formData.types.length > 3){
  //   //   console.log('acaccaca');
  //   // }
  //     e.target.disabled = false

  //   const value = e.target.name;

  //   if (e.target.checked === true) {
  //     // arr.push(value)
  //     setFormData({ ...formData, types: [...formData.types, value] });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       types: [...formData.types.filter((e) => e !== value)],
  //     });
  //   }
  // };

  return (
    <div>
      <div>Createpokemon</div>
      <section className={style.container}>
        <form className={style.form}>
          <fieldset className={`${style.fieldset} ${style.uno}`}>
            <legend>Informacion basica</legend>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Ingresa tu nombre"
                onChange={(e) => handlerChanged(e)}
                required
              />
              <p>{errorData.name}</p>
            </div>
            <div>
              <label htmlFor="imagen">Image</label>
              <input
                type="text"
                name="image"
                id="imagen"
                value={formData.image}
                placeholder="ingresa una url de imagen"
                onChange={(e) => handlerChanged(e)}
                required
              />
              <p>{errorData.image}</p>
            </div>

            <div>
              <label htmlFor="height">height</label>
              <input
                type="number"
                name="height"
                id="height"
                placeholder=""
                value={formData.height}
                required
                onChange={(e) => handlerChanged(e)}
              />
              <p>{errorData.height}</p>
            </div>
            <div>
              <label>weight</label>
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder=""
                value={formData.weight}
                required
                onChange={(e) => handlerChanged(e)}
              />
              <p>{errorData.weight}</p>
            </div>
          </fieldset>
          <fieldset className={`${style.fieldset} ${style.dos}`}>
            <div>
              <h3>Types</h3>
              <select onChange={(e) => handlerType(e)} >
                {allTypes.map((el) => (
                  <Types key={el.id} name={el.name} />
                ))}
              </select>
              <select onChange={(e) => handlerType(e)}>
                {allTypes.map((el) => (
                  <Types key={el.id} name={el.name} />
                ))}
              </select>
              <select onChange={(e) => handlerType(e)}>
                {allTypes.map((el) => (
                  <Types key={el.id} name={el.name} />
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset className={`${style.fieldset} ${style.tres}`}>
            <legend>Estadisticas</legend>
            <div>
              <label htmlFor="life">life</label>
              <input
                type="number"
                name="life"
                id="life"
                placeholder=""
                required
                value={formData.life}
                onChange={(e) => handlerChanged(e)}
              />
              <p>{errorData.life}</p>
            </div>
            <div>
              <label htmlFor="stroke">stroke</label>
              <input
                type="number"
                name="stroke"
                id="stroke"
                placeholder=""
                required
                value={formData.stroke}
                onChange={(e) => handlerChanged(e)}
              />
              <p>{errorData.stroke}</p>
            </div>
            <div>
              <label htmlFor="defense">defense</label>
              <input
                type="number"
                name="defense"
                id="defense"
                placeholder=""
                required
                value={formData.defense}
                onChange={(e) => handlerChanged(e)}
              />
              <p>{errorData.defense}</p>
            </div>
            <div>
              <label htmlFor="speed">speed</label>
              <input
                type="number"
                name="speed"
                id="speed"
                required
                placeholder=""
                value={formData.speed}
                onChange={(e) => handlerChanged(e)}
              />
              <p>{errorData.defense}</p>
            </div>
          </fieldset>
          <input type="button" value="Crear" onClick={(e) => handleForm(e)} />
        </form>
      </section>
    </div>
  );
}
//pending

// [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
// [ ] Número de Pokemon (id)
// [ ] Estadísticas (vida, ataque, defensa, velocidad)
// [ ] Altura y peso
