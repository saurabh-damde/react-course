import style from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <>
      <div className={style.backdrop} onClick={props.clear}></div>
      <Card class={style.modal}>
        <header className={style.header}>
          <h2>{props.errorData.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.errorData.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.clear}>OK</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
