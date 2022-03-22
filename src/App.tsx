import { useState } from 'react'
import Main from './components/Main'
import Section1 from './components/Section1'
import IconName, { BiChevronsUp } from 'react-icons/bi'
import './components/styles/app.css'
import Priority from './components/Priority'
import List from './components/List'


function App() {

  const [scroll , scrollChange] = useState(false)

  const backTo = () => {
    if(window.scrollY >= 10){
      scrollChange(true)
    }else{
      scrollChange(false)
    }
  }

  const backToTop = () =>{
    window.scrollTo(0,0)
  }


  window.addEventListener("scroll", backTo)
  return (
    <div className='app'>
      <Main/>
      <Section1/>
        <div className="diveider"></div>
      <div className="priority">
        <Priority title="Red"   text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, unde, commodi ipsam mollitia explicabo, repellendus nostrum deserunt dicta ea ducimus incidunt? Enim, dolores dolorem placeat atque praesentium quisquam repellat!' />
        <Priority title="Yellow"   text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, unde, commodi ipsam mollitia explicabo, repellendus nostrum deserunt dicta ea ducimus incidunt? Enim, dolores dolorem placeat atque praesentium quisquam repellat!'  />
        <Priority title="Green"   text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci, unde, commodi ipsam mollitia explicabo, repellendus nostrum deserunt dicta ea ducimus incidunt? Enim, dolores dolorem placeat atque praesentium quisquam repellat!'  />
      </div>
        <div className="diveider"></div>
      <List/>
      <footer>@annyxvs</footer>
       <BiChevronsUp className={scroll ? "bnt-back" : ""} onClick={backToTop} />
    </div>
  )
}

export default App
