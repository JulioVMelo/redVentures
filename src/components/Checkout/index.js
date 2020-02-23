import React from 'react';
import * as Ui from './styles';
import HighSun from '../../assets/images/icons/highSun.png';
import HighWater from '../../assets/images/icons/highWater.png';
import LowSun from '../../assets/images/icons/lowSun.png';
import False from '../../assets/images/icons/false.png';
import LowWater from '../../assets/images/icons/lowWater.png';
import Toxic from '../../assets/images/icons/toxic.png';
import Dog from '../../assets/images/icons/Dog.png';

export default function Checkout({ image, water, sun, toxic }) {
  return (
    <Ui.Container>
      <h1>Succulent bowl</h1>
      <span>$ 30</span>
      <div className="image">
        <img src={image} alt="Succulent" />
      </div>
      <div className="properties">
        <div className="item">
          {sun === 'high' && <img src={HighSun} alt="properties" />}
          {sun === 'low' && <img src={LowSun} alt="properties" />}
          {sun === 'no' && <img src={False} alt="properties" />}
          <span>{sun} sunlight</span>
        </div>
        <div className="item">
          {water === 'daily' && <img src={HighWater} alt="properties" />}
          {water === 'regularly' && <img src={LowWater} alt="properties" />}
          {water === 'rarely' && <img src={False} alt="properties" />}
          <span>Water {water}</span>
        </div>
        {toxic && (
          <div className="item">
            <img src={Toxic} alt="toxic" />
            <span>
              <strong>Beware!</strong> Toxic for pets
            </span>
          </div>
        )}
        {!toxic && (
          <div className="item">
            <img src={Dog} alt="toxic" />
            <span>Non-toxic for pets</span>
          </div>
        )}
      </div>
    </Ui.Container>
  );
}
