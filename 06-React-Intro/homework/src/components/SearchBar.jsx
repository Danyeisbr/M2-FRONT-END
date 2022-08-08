import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>Search Bar Component
    <input type="text"/>
    <button onClick={() => props.onSearch("Ciudad Agregada...")}> ADD CITY </button>
  </div>
  )
};

/* Cuando la funcion recibe parametros y hacemos un event listener debemos usar una funcion flecha que nos retorne el resultado de esa funcion que invocamos ya que si no lo hacemos solo nos retorna un Object */