import React from 'react';
import * as Ui from './styles';

export default function Step({ image, children, subTitle }) {
  return (
    <Ui.Container>
      <div className="image">
        <img src={image} alt="sun" />
        <h1>{children}</h1>
        <h4>{subTitle}</h4>
      </div>
    </Ui.Container>
  );
}
