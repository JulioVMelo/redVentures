import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as Ui from './styles';
import Pick from '../../assets/images/pick.png';
import Border from '../../components/Border';
import api from '../../services/api';
import Product from '../../components/Product';

export default function Store() {
  const [plants, setPlants] = useState([]);
  const { sun, water, pets } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function handleFetchPlants() {
      api
        .get(`?sun=${sun}&water=${water}&pets=${pets}`)
        .then(res => setPlants(res.data));
    }
    handleFetchPlants();
  }, [pets, sun, water]);

  const handlePlantDetail = useCallback(
    id => {
      history.push(`/purchase/${id}`);
    },
    [history]
  );

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
          plants.map(
            ({
              name,
              url,
              price,
              id,
              sun: sunPlant,
              water: waterPlant,
              toxicity,
            }) => (
              <Product
                id={id}
                name={name}
                image={url}
                price={price}
                handleDetail={() => handlePlantDetail(id)}
                properties={{ sunPlant, waterPlant, toxicity }}
              />
            )
          )}
      </Ui.ListProducts>
    </Ui.Container>
  );
}
