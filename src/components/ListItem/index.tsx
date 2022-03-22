import { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { Item } from '../types/Item'

type Props = {
  item: Item
}

import './style.css'

export const ListItem = ({item} : Props) =>{

  const [isChecked, setIsChecked] = useState(item.done);

  const [clicked, setCliked] = useState(false)
 
  const handleClick = () =>{
    if(clicked == false){
      setCliked(true)
    }else{
      setCliked(true)
    }
  }

  return(
    <div className="List-item">
        <input type='checkbox' 
         checked={isChecked} 
         onChange={e => setIsChecked(e.target.checked)}
         className='checked'
         />
        <label className='label'onClick={handleClick} >{item.name}</label>
        <select className='select'>
          <option value="red">RED</option>
          <option value="green">GREEN</option>
          <option value="yellow">YELLOW</option>
        </select>
    </div>
  )

}