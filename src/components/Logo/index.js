import React, { memo } from 'react';
import LogoImg from '../../assets/images/logo.png';
import * as Ui from './styles';

function Logo() {
  return (
    <Ui.Container>
      <img src={LogoImg} alt="red plants" />
    </Ui.Container>
  );
}

export default memo(Logo);
