import React from 'react';
import objStyles from  './Product.css';


function Product(props) {
  console.log('este es el objeto de estilos:', objStyles);
  return (
    <div className={`${objStyles.producto} ${objStyles.hola}`}>
      <h3 className={objStyles.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
