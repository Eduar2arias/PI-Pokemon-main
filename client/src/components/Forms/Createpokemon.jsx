import React, {  useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Types from "../pokemons/Types";
import validate from "./controllerForm";
import style from "./createpokemon.module.css";
import { getTypes } from "../../redux/actions/action";
import axios from "axios";

export default function Createpokemon(props) {
  
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
  }, [dispatch]);
  // console.log(formData);
  const handlerChanged = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [property]: value });

    setErrorData(validate({ ...formData, [property]: value }));
    // setErrorData(validate( {...formData,[property]: value} ));
  };
  
  const handlerType = (e) => {
   
    const value = e.target.value;
    const arrType = formData.type.find((type) => type === value);
   
    if (!arrType) {
      setFormData({ ...formData, type: [...formData.type, value] });
    }
    // console.log(formData.type.length+1);
    // if (formData.type.length+1 < 1) {
    //   console.log('error');
    //   setErrorData({...errorData,type:'debes seleccionar al menos un tipo'})
    // }else{
    //   setErrorData({...errorData,type:''})
    // }
  };
  // alert('asdsa')
  function handleForm(e){

    for (const form in formData) {
      console.log(form);
      console.log(!formData[form]);

      if(!formData[form] || !formData[form].length){
        return alert(`falta por ingresar dato en la casilla ${form}`)
      }
    }

    console.log(formData); 
    e.preventDefault()
    try {
      axios.post('http://localhost:3001/pokemons',{...formData})
      
    } catch (error) {
      console.log('entre');
      alert('no se pudo enviar el formulario')
    }
  }

 

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
                placeholder="enter a name"
                onChange={(e) => handlerChanged(e)}
                required
              />
              <p className={style.warning}>{errorData.name}</p>
            </div>
            <div>
              <label htmlFor="imagen">Image</label>
              <input
                type="text"
                name="image"
                id="imagen"
                value={formData.image}
                placeholder="enter a url"
                onChange={(e) => handlerChanged(e)}
                required
              />
              <p className={style.warning}>{errorData.image}</p>
            </div>

            <div>
              <label htmlFor="height">height</label>
              <input
                type="number"
                name="height"
                id="height"
                placeholder="enter a height"
                value={formData.height}
                required
                onChange={(e) => handlerChanged(e)}
              />
              <p className={style.warning}>{errorData.height}</p>
            </div>
            <div>
              <label>weight</label>
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="enter a weight"
                value={formData.weight}
                required
                onChange={(e) => handlerChanged(e)}
              />
              <p className={style.warning}>{errorData.weight}</p>
            </div>
          </fieldset>
          <fieldset className={`${style.fieldset} ${style.dos}`}>
            <div>
              <h3>Types</h3>
              <select onChange={(e) => handlerType(e)} >
                <option>None</option>
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
              <p>{errorData.type}</p>
            </div>
          </fieldset>
          <fieldset className={`${style.fieldset} ${style.tres}`}>
            <legend>Stats</legend>
            <div>
              <label htmlFor="life">life</label>
              <input
                type="number"
                name="life"
                id="life"
                placeholder="enter life"
                required
                value={formData.life}
                onChange={(e) => handlerChanged(e)}
              />
              <p className={style.warning}>{errorData.life}</p>
            </div>
            <div>
              <label htmlFor="stroke">attack</label>
              <input
                type="number"
                name="stroke"
                id="stroke"
                placeholder="enter attack"
                required
                value={formData.stroke}
                onChange={(e) => handlerChanged(e)}
              />
              <p className={style.warning}>{errorData.stroke}</p>
            </div>
            <div>
              <label htmlFor="defense">defense</label>
              <input
                type="number"
                name="defense"
                id="defense"
                placeholder="enter defense"
                required
                value={formData.defense}
                onChange={(e) => handlerChanged(e)}
              />
              <p className={style.warning}>{errorData.defense}</p>
            </div>
            <div>
              <label htmlFor="speed">speed</label>
              <input
                type="number"
                name="speed"
                id="speed"
                required
                placeholder="enter speed"
                value={formData.speed}
                onChange={(e) => handlerChanged(e)}
              />
              <p className={style.warning}>{errorData.speed}</p>
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
