import React,{useRef,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SearchByName({fnSearchByname}) {
    // let refName = createRef(),
    const [name, setName] = useState('')
    const refName = useRef("");
    // const navigate = useNavigate()
    let value;
    const fnChange = () => {
        console.log(refName.current.value);
        value = refName.current.value
        // value = refName.current.value
        // fnSearchByname(refName.current.value)
        setName(value)
        
        
    }
    
    
    
  return (
    <div>
        <form>
            <input ref={refName} type='text'  value={name} onChange={fnChange}/>
            <Link to={`/home/detalle/${name}`}>
            

            <input type='button' value='Search' onClick={()=>fnSearchByname(name)}/>
            </Link>
            
        </form>
    </div>
  )
}
