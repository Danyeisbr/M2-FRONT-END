import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink',
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
};

const h3Style = {
  color: "red", 
}

function Product(props) {
  return (
    <div style={divStyle}>
      <h3 style={h3Style} >{props.title}</h3>
      <p style={pStyle}>{props.price}</p>
    </div>
  );
}

export default Product;
