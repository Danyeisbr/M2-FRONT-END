import React from 'react';
import Styles from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={Styles.container}>
    <input className={Styles.searchCity} type="text" placeholder='Search City...' />
    <button className={Styles.btnSearch} onClick={() => props.onSearch("Ciudad Agregada...")}> ADD CITY </button>
  </div>
  )
};

/* Cuando la funcion recibe parametros y hacemos un event listener debemos usar una funcion flecha que nos retorne el resultado de esa funcion que invocamos ya que si no lo hacemos solo nos retorna un Object */