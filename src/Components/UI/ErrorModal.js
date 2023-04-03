import React from "react";
import ReactDom from 'react-dom';
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css';


const Backdrop = (props) =>{
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) =>{

  return (
  <Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.text}</p>
    </div>
    <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>

    </footer>
  </Card>
  )
}

const ErrorModal = (props) => {
  return(
    <React.Fragment>
    {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>, document.getElementById('backdrop--root'))}
    {ReactDom.createPortal(<ModalOverlay title={props.title} text={props.text} onConfirm={props.onConfirm}></ModalOverlay> ,document.getElementById('modal--root'))}
  </React.Fragment>
  );
};

export default ErrorModal;
