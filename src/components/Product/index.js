import React from 'react';
import * as Ui from './styles';

export default function Product({ image, name, price, id }) {
  return (
    <Ui.Container>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="info">
        <span>$ {price}</span>
        <div className="properties">
          <span />
        </div>
      </div>
      <button type="button">buy now</button>
    </Ui.Container>
  );
}
