import React from 'react';
import styled from 'styled-components';

const Producto = styled.div`
  color: salmon;
  font-size: 20px;
  & h3 {
    background-color: SpringGreen; 
  }
`;

const Titulo = styled.h3`
  font-size: 30px;
  &:hover {
    color: grey;
  }
`;

const Parrafo = styled.p `
  color: blue;
  &:hover {
    color: red;
  }
`;

function Product(props) {
  return (
    <Producto>
      <Titulo>{props.title}</Titulo>
      <Parrafo>{props.price}</Parrafo>
      <p> Hola, soy el parrafo sin estilo </p>
    </Producto>
  );
}

export default Product;
