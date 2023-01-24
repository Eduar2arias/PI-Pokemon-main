import React from "react";

export default function Checkboxs({changeCheck}) {
  return (
    <>
      <label htmlFor="types[]" onChange={(e) => console.log(e.target)}>
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
