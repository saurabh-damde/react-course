import ReactDOM from "react-dom";
import style from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.clear}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card class={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.clear}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop clear={props.clear} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.errorData.title}
          message={props.errorData.message}
          clear={props.clear}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
