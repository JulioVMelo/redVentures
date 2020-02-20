import React from 'react';
import * as Ui from './styles';

export default function Step({ image, children }) {
  return (
    <Ui.Container>
      <div className="image">
        <img src={image} alt="sun" />
        <h1>{children}</h1>
      </div>
    </Ui.Container>
  );
}
