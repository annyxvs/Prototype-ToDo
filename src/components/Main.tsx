import Header from "./Header";
import './styles/main.css'
import  Imghome  from './images/img-home.png'
import { BiChevronRight } from "react-icons/bi";
import  IconName, { AiFillGithub, AiFillLinkedin }  from 'react-icons/ai'

const Main = () =>{
  return(
    <div className="main">
      <Header/>
      <div className="home-page">
        <div className="asideL">
          <h2>To Do</h2>
          <h2>List</h2>
          <p>Put order in your life and set your priorities.Join our community and let's make it.</p>
          <button className="singin">Sing in  </button>
        </div>
        <div className="asideR">
          <img  className="img-main" src={Imghome} alt=""/>
        </div>
        <div className="social">
          <a href="#"> <AiFillGithub/> Github</a>
          <a href="#"><AiFillLinkedin/>Linkedin</a>
        </div>

      </div>  
    </div>
  )
}

export default Main;