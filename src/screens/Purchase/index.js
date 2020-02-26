import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams, Switch, Route } from 'react-router-dom';
import * as Ui from './styles';
import api from '../../services/api';
import Border from '../../components/Border';
import Checkout from '../../components/Checkout';
import BoxInput from '../../components/BoxInput';
import Email from '../../assets/images/icons/email.png';
import Logo from '../../components/Logo';

export default function Purchase() {
  const [plant, setPlant] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function handleFetchPlantDetail() {
      api.get(`/plant?id=${id}`).then(res => setPlant(res.data));
    }

    handleFetchPlantDetail();
  }, [id]);

  const handleSubmit = useCallback(
    values => {
      values.id = id;
      api.post('', values).then(history.push(`/purchase/${id}/success`));
    },
    [history, id]
  );

  return (
    <Ui.Container>
      <Logo />
      <Border />
      <section className="cart">
        {plant && (
          <Checkout
            image={plant.url}
            sun={plant.sun}
            water={plant.water}
            toxic={plant.toxicity}
          />
        )}
        <Switch>
          <Route path="/purchase/:id" exact>
            <BoxInput handleSubmit={values => handleSubmit(values)} />
          </Route>
          <Route path="/purchase/:id/success">
            <Ui.Success>
              <h1>Thank you!</h1>
              <p>You will hear from us soon. Please check your e-mail!</p>
              <img src={Email} alt="email send" />
            </Ui.Success>
          </Route>
        </Switch>
      </section>
    </Ui.Container>
  );
}
