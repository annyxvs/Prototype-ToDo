import { useState } from "react";
import { KeyboardEvent } from "react";
import { Item } from "./types/Item";
import { ListItem } from './ListItem'
import { AiFillFileAdd, AiFillFolderAdd, AiFillInfoCircle, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import './styles/list.css'

const List = () =>{

  const [list, setList] = useState<Item[]>([])

  const [task , newTask ] = useState('')

  const handleKeyUp = (e: KeyboardEvent) =>{
    if(e.code === 'Enter' && task !== ''){
      handleAddTask(task);
    }
  }

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return(

    <div className="list-main">
      <div className="conteiner-list">
        <div className="input-task">
          <div className="image"><AiOutlinePlus/></div>
          <input  className="insert-task" type='text' placeholder="Add new task..."
            onChange={e => newTask(e.target.value)}
            onKeyUp={handleKeyUp}
          />
      </div>
      {list.map((item, index, done) => (
        <ListItem key={index} item={item} />
      ))}
      </div>
    </div>

  )
}

export default List;