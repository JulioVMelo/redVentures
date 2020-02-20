import React from 'react';
import * as Ui from './styles';
import Step from '../../components/Step';
import Border from '../../components/Border';
import Sun from '../../assets/images/sun.png';

export default function Sunlight() {
  return (
    <Ui.Container>
      <Border />
      <Step image={Sun}>
        First, set the amount of <br />
        <strong>sunlight</strong> your plant will get.
      </Step>
    </Ui.Container>
  );
}
