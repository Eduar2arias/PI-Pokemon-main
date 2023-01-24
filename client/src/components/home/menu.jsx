import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkboxs from "../Forms/Checkboxs";
import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/actions/action.js";

export default function Menu() {
  const [filter, setFilter] = useState(false);
  const [typeFilter, setTypeFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState([]);
  const dispatch = useDispatch();
  const fnToogleFilter = (e) => {
    e.preventDefault();
    setFilter(!filter);
  };

  const fnFilter = (e) => {
    e.preventDefault();
    setTypeFilter(!typeFilter);
  };
  const changeCheck = (e) => {
    let arr = [];
    const value = e.target.name;
    if (e.target.checked) {
      // arr.push(value)
      setDataFilter(value);
    } else {
      setDataFilter("");
      // setFormData({...formData, types:[...formData.types.filter( e => e !== value)]})
    }
    dispatch(addFilter(dataFilter));
  };
  console.log(dataFilter);
  const sendFilter = (e) => {
    dispatch(addFilter(dataFilter));
    console.log('entre en la');
  };
  console.log(filter);
  let menu = (
    <ul>
      <li>
        <Link to="/home/f/types" onClick={(e) => fnFilter(e)}>
          Tipo
        </Link>
        {typeFilter ? (
          <form>
            <Checkboxs changeCheck={changeCheck} />
            <Link to={`/home/f/types`}>
              <input type="button" onClick={(e) => sendFilter(e)} />
            </Link>
          </form>
        ) : (
          ""
        )}
      </li>
      <li>
        <Link to="/home/f/created">Created</Link>
      </li>
    </ul>
  );
  return (
    <div>
      <ul>
        <li>
          <a href="" onClick={(e) => fnToogleFilter(e)}>
            filtros
          </a>
          {filter ? menu : ""}
        </li>
      </ul>
    </div>
  );
}
