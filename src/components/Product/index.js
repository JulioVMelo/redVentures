import React from 'react';
import PropTypes from 'prop-types';
import * as Ui from './styles';
import HighSun from '../../assets/images/icons/highSun.png';
import FalseIcon from '../../assets/images/icons/false.png';
import LowSun from '../../assets/images/icons/lowSun.png';
import HighWater from '../../assets/images/icons/highWater.png';
import LowWater from '../../assets/images/icons/lowWater.png';
import Toxic from '../../assets/images/icons/toxic.png';

export default function Product({
  image,
  name,
  price,
  id,
  handleDetail,
  properties,
}) {
  return (
    <Ui.Container>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="info">
        <span>$ {price}</span>
        <div className="properties">
          {properties.toxicity && <img src={Toxic} alt="toxic" />}

          {properties.sunPlant === 'high' && (
            <img src={HighSun} alt="high sun" />
          )}
          {properties.sunPlant === 'low' && <img src={LowSun} alt="low sun" />}

          {properties.waterPlant === 'rarely' && (
            <img src={FalseIcon} alt="no water" />
          )}
          {properties.waterPlant === 'daily' && (
            <img src={HighWater} alt="daily water" />
          )}
          {properties.waterPlant === 'regularly' && (
            <img src={LowWater} alt="daily water" />
          )}
        </div>
      </div>
      <button type="button" onClick={() => handleDetail(id)}>
        buy now
      </button>
    </Ui.Container>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  handleDetail: PropTypes.func,
  properties: PropTypes.shape({
    toxicity: PropTypes.string,
    sunPlant: PropTypes.string,
    waterPlant: PropTypes.string,
  }),
};

Product.defaultProps = {
  image: '',
  name: '',
  price: '',
  id: '',
  handleDetail: () => {},
  properties: {},
};
