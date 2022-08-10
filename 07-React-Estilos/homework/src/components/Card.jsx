import React from 'react';
import Styles from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={Styles.container}>
      <button className={Styles.buttonClose} onClick={props.onClose}> X </button>
      <h1> {props.name} </h1>
      <div className={Styles.temperature}>
        <div>
          <p> Min </p>
          <p> {props.min} </p>
        </div>
        <div>
          <p> Max </p>
          <p> {props.max} </p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Imagen clima'/>
      </div>
    </div>
  )
};