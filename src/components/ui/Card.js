import style from "./Card.module.css";

const Card = (props) => {
  return <div className={`${style.card} ${props.class}`}>{props.children}</div>;
};
export default Card;
