import style from "./Message.module.css"

const Message = ({text}) =>{
  return (
    <div>
        <p className={style.p}>{text}</p>
    </div>
  )
}

export default Message