import './styles/priority.css'

type Props = {
  title: string;
  text: string;
}

const Priority = ({title, text} : Props) =>{
  return(
      <>
        <div className="component-block">
          <h1>{title}</h1>
          <div className={title}></div>
          <p>{text}</p>
        </div>
      </>
  )
}

export default Priority;