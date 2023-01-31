import React from "react";

export default function Checkboxs({changeCheck}) {
  return (
    <>
      <label  onChange={(e) => console.log(e.target)}>
        Tipos
      </label>
      <input
        type="checkbox"
        name="normal"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      normal
      <input
        type="checkbox"
        name="fighting"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      fighting
      <input
        type="checkbox"
        name="flying"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      flying
      <input
        type="checkbox"
        name="poison"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      poison
      <input
        type="checkbox"
        name="ground"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      ground
      <input
        type="checkbox"
        name="rock"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      rock
      <input
        type="checkbox"
        name="bug"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      bug
      <input
        type="checkbox"
        name="ghost"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      ghost
      <input
        type="checkbox"
        name="steel"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      steel
      <input
        type="checkbox"
        name="fire"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      fire
      <input
        type="checkbox"
        name="water"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      water
      <input
        type="checkbox"
        name="grass"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      grass
      <input
        type="checkbox"
        name="electric"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      electric
      <input
        type="checkbox"
        name="psychic"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      psychic
      <input
        type="checkbox"
        name="ice"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      ice
      <input
        type="checkbox"
        name="dark"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      dark
      <input
        type="checkbox"
        name="fairy"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      fairy
      <input
        type="checkbox"
        name="unknown"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      unknown
      <input
        type="checkbox"
        name="shadow"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      shadow
      <input
        type="checkbox"
        name="types"
        id="types"
        onChange={(e) => changeCheck(e)}
      />
      normal
    </>
  );
}


// <div>
// <label htmlFor="id">Id</label>
// <input
//   type="text"
//   placeholder="ingresa un Id"
//   name="id"
//   id="id"
//   value={formData.id}
//   onChange={(e) => handlerChanged(e)}
// />
// <p>{errorData.id}</p>
// </div>



// <label htmlFor="normal" >normal
              
// <input
//   className="check"
//   type="checkbox"
//   name="normal"
//   id="types"
//   onClick={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="fighting" >fighting
// <input
//   className="check"
//   ref={refinput}
//   type="checkbox"
//   name="fighting"
//   id="types"
//   onClick={(e) => changeCheck(e)}
// />

// </label>
// <label htmlFor="flying" >flying
// <input
//   className="check"
//   type="checkbox"
//   name="flying"
//   id="types"
//   onClick={(e) => changeCheck(e)}
// />
// </label>


// <label htmlFor="poison" >poison

// <input
//   className="check"
//   type="checkbox"
//   name="poison"
//   id="types"
//   onClick={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="ground" >ground

// <input
//   className="check"
//   type="checkbox"
//   name="ground"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="rock" >rock

// <input
//   className="check"
//   type="checkbox"
//   name="rock"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="bug" >bug

// <input
//   className="check"
//   type="checkbox"
//   name="bug"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="ghost" >ghost

// <input
//   className="check"
//   type="checkbox"
//   name="ghost"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="steel" >steel

// <input
//   className="check"
//   type="checkbox"
//   name="steel"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="fire" >fire

// <input
//   className="check"
//   type="checkbox"
//   name="fire"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="water" >water
// <input
//   className="check"
//   type="checkbox"
//   name="water"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />

// </label>

// <label htmlFor="grass" >grass

// <input
//   className="check"
//   type="checkbox"
//   name="grass"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="electric" >electric

// <input
//   className="check"
//   type="checkbox"
//   name="electric"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// </label>

// <label htmlFor="psychic" >psychic</label>
// <input
//   className="check"
//   type="checkbox"
//   name="psychic"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />

// <label htmlFor="ice" >ice</label>
// <input
//   className="check"
//   type="checkbox"
//   name="ice"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />

// <label htmlFor="dark" >dark</label>
// <input
//   className="check"
//   type="checkbox"
//   name="dark"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />

// <label htmlFor="dragon" >dragon</label>
// <input
//   className="check"
//   type="checkbox"
//   name="dragon"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// <label htmlFor="fairy" >fairy</label>
// <input
//   className="check"
//   type="checkbox"
//   name="fairy"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />

// <label htmlFor="unknown" >unknown</label>
// <input
//   className="check"
//   type="checkbox"
//   name="unknown"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />

// <label htmlFor="shadow" >shadow</label>
// <input
//   className="check"
//   type="checkbox"
//   name="shadow"
//   id="types"
//   onChange={(e) => changeCheck(e)}
// />
// shadow
// <p>{errorData.types}</p>