import { useState } from 'react'
import IconName, { IoAdd, IoCheckmarkDoneSharp, IoRemove } from 'react-icons/io5'
import './styles/section1.css'
import Tarefa from './images/tarefa.png'

const Section1 = () =>{

  return (
    <div className='section'>


      <div className="section-text">
          <h2>What to use?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, unde, commodi ipsam mollitia explicabo, repellendus nostrum deserunt dicta ea ducimus incidunt? Enim, dolores dolorem placeat atque praesentium quisquam repellat!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, unde, commodi ipsam mollitia explicabo, repellendus nostrum deserunt dicta ea ducimus incidunt? Enim, dolores dolorem placeat atque praesentium quisquam repellat!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, unde, commodi ipsam mollitia explicabo, repellendus nostrum deserunt dicta ea ducimus incidunt? Enim, dolores dolorem placeat atque praesentium quisquam repellat!</p>
        </div>

      <div className="section-part"></div>
      <img src={Tarefa} alt="planilha para escrever tarefas." className='task-img'/>


        </div>
  );
}

export default Section1;