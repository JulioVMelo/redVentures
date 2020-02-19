import React from 'react';
import * as Ui from './styles';
import Logo from '../../assets/images/logo.png';
import Arrow from '../../assets/images/arrow.png';

export default function Home() {
  return (
    <Ui.Container>
      <header className="logo">
        <img src={Logo} alt="red plants" />
      </header>
      <section className="call">
        <h1>Find your next green friend</h1>
        <button className="-dark" type="button">
          <img src={Arrow} alt="start quizz" /> start quizz
        </button>
      </section>
    </Ui.Container>
  );
}
