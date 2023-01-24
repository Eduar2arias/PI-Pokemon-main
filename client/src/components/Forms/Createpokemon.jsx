import React, { useState } from "react";
import Checkboxs from "./Checkboxs";
import validate from "./controllerForm";

export default function Createpokemon(props) {
  const [formData , setFormData] = useState({
    name: "",
    id:'',
    types:[],
    height:'',
    weight:'',
    life: '',
    stroke:'',
    defense:'',
    speed:''
  })
  const [errorData , setErrorData] = useState({
    name: ""
  })
  console.log(errorData);
  const handlerChanged = (e) => {
    const property = e.target.name
    const value = e.target.value
    setFormData({...formData,[property]:value})

    validate( {...formData,[property]: value} ,errorData,setErrorData)
    // setErrorData(validate( {...formData,[property]: value} ));
  }
  const changeCheck  = (e) => {
    let arr = []
    const value = e.target.name
    if (e.target.checked) {
      arr.push(value)
      setFormData({...formData, types:[...formData.types,value]})
      
    }else{
      setFormData({...formData, types:[...formData.types.filter( e => e !== value)]})
    }

  }
  
  console.log(formData);
  return (
    <div>
      <div>Createpokemon</div>
      <form>
        <fieldset>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              id="name"
              value={formData.name}
              placeholder="Ingresa tu nombre"
              onChange={(e)=>handlerChanged(e)}
              onFocus={(e) => {
                console.log(e.target);
              }}
            />
            <p>{errorData.error_name}</p>
          </div>
          <div>
            <label htmlFor="id">Id</label>
            <input 
            type='text'
            placeholder="ingresa un Id" 
            name="id"
            id="id"
            value={formData.id}
            onChange={(e)=>handlerChanged(e)}
             />
          </div>
          <div>
            <label htmlFor="height">height</label>
            <input 
              type='number'
              name="height"
              id="height"
              placeholder=""
              value={formData.height}
              onChange={(e)=>handlerChanged(e)}
            />
          </div>
          <div>
            <label>weight</label>
            <input 
              type='number'
              name="weight"
              id="weight"
              placeholder=""
              value={formData.weight}
              onChange={(e)=>handlerChanged(e)}
            />
          </div>
          <div>
            <Checkboxs changeCheck={changeCheck}/>
            <hr/>
            <label htmlFor="types[]"onChange={(e)=> console.log(e.target)}>Tipos</label>
            <input type="checkbox" name="normal" id="types" onChange={(e)=> changeCheck(e)}/>
            normal
            <input type="checkbox" name="fighting" id="types" onChange={(e)=> changeCheck(e)}/>
            fighting
            <input type="checkbox" name="flying" id="types" onChange={(e)=> changeCheck(e)}/>
            flying
            <input type="checkbox" name="poison" id="types" onChange={(e)=> changeCheck(e)}/>
            poison
            <input type="checkbox" name="ground" id="types" onChange={(e)=> changeCheck(e)}/>
            ground
            <input type="checkbox" name="rock" id="types" onChange={(e)=> changeCheck(e)}/>
            rock
            <input type="checkbox" name="bug" id="types" onChange={(e)=> changeCheck(e)}/>
            bug
            <input type="checkbox" name="ghost" id="types" onChange={(e)=> changeCheck(e)}/>
            ghost
            <input type="checkbox" name="steel" id="types" onChange={(e)=> changeCheck(e)}/>
            steel
            <input type="checkbox" name="fire" id="types" onChange={(e)=> changeCheck(e)}/>
            fire
            <input type="checkbox" name="water" id="types" onChange={(e)=> changeCheck(e)}/>
            water
            <input type="checkbox" name="grass" id="types" onChange={(e)=> changeCheck(e)}/>
            grass
            <input type="checkbox" name="electric" id="types" onChange={(e)=> changeCheck(e)}/> 
            electric
            <input type="checkbox" name="psychic" id="types" onChange={(e)=> changeCheck(e)}/> 
            psychic
            <input type="checkbox" name="ice" id="types" onChange={(e)=> changeCheck(e)}/>
            ice
            <input type="checkbox" name="dark" id="types" onChange={(e)=> changeCheck(e)}/>
            dark
            <input type="checkbox" name="fairy" id="types" onChange={(e)=> changeCheck(e)}/>
            fairy
            <input type="checkbox" name="unknown" id="types" onChange={(e)=> changeCheck(e)}/>
            unknown
            <input type="checkbox" name="shadow" id="types" onChange={(e)=> changeCheck(e)}/>
            shadow
            <input type="checkbox" name="types" id="types" onChange={(e)=> changeCheck(e)}/>
            normal
          </div> 
        </fieldset>
        <fieldset>
          <legend>Estadisticas</legend>
          <div>
            <label htmlFor="life">life</label>
            <input 
              type='number'
              name="life"
              id="life"
              placeholder=""
              value={formData.life}
              onChange={(e)=>handlerChanged(e)}
            />
          </div>
          <div>
            <label htmlFor="stroke">stroke</label>
            <input 
            type="number"
            name='stroke'
            id="stroke"
            placeholder=""
              value={formData.stroke}
            onChange={(e)=>handlerChanged(e)}
            />
          </div>
          <div>
            <label htmlFor="defense">Defense</label>
            <input 
              type='number'
              name="defense"
              id="defense"
              placeholder=""
              value={formData.defense}
              onChange={(e)=>handlerChanged(e)}
            />
          </div>
          <div>
            <label htmlFor="Speed">Speed</label>
            <input 
              type='number'
              name="speed"
              id="speed"
              placeholder=""
              value={formData.speed}
              onChange={(e)=>handlerChanged(e)}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
//pending

// [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
// [ ] Número de Pokemon (id)
// [ ] Estadísticas (vida, ataque, defensa, velocidad)
// [ ] Altura y peso
