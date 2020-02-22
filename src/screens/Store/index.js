import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Ui from './styles';
import Pick from '../../assets/images/pick.png';
import Border from '../../components/Border';
// import Product from '../../components/Product';
import api from '../../services/api';
import Product from '../../components/Product';

export default function Store() {
  const [plants, setPlants] = useState([]);
  const { sun, water, pets } = useParams();

  useEffect(() => {
    async function handleFetchPlants() {
      api
        .get(`?sun=${sun}&water=${water}&pets=${pets}`)
        .then(res => setPlants(res.data));
    }
    handleFetchPlants();
  }, [pets, sun, water]);

  return (
    <Ui.Container>
      <Border />
      <Ui.Header>
        <div className="image">
          <img src={Pick} alt="Our picks for you" />
        </div>
        <h1>Our picks for you</h1>
      </Ui.Header>
      <Ui.ListProducts>
        {plants &&
          plants.map(({ name, url, price, id }) => (
            <Product id={id} name={name} image={url} price={price} />
          ))}
        {/* <Product /> */}
      </Ui.ListProducts>
    </Ui.Container>
  );
}
