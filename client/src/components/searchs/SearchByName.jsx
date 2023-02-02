import React, { useRef, useState } from "react";
import { Link} from "react-router-dom";
import style from './search.module.css'

export default function SearchByName({ fnSearchByname }) {
  // let refName = createRef(),
  const [name, setName] = useState("");
  const refName = useRef("");
  // const navigate = useNavigate()
  
  let value;
  const fnChange = () => {
  
    value = refName.current.value;
    
    setName(value);
  };

  return (
    <div>
      <form className={style.form}>
        <input  className={style.input} ref={refName} type="text" value={name} placeholder='Inser name or id ' onChange={fnChange} />
        <Link to={`/home/detalle/${name}`}>
          <input className={style.inputbtn}
            
            type="button"
            value="Search"
            
            onClick={() => fnSearchByname(name)}
          />
        </Link>
      </form>
    </div>
  );
}
