import style from "./Title.module.css";

const Title = ({ text }) => {
  return <h1 className={style.h1}>{text}</h1>;
};

export default Title;
