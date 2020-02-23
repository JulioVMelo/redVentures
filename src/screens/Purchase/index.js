import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Ui from './styles';
import api from '../../services/api';
import Border from '../../components/Border';
import Checkout from '../../components/Checkout';
import Erro from '../../assets/images/icons/error.png';

const schema = yup.object().shape({
  name: yup.string().required('is required'),
  email: yup
    .string()
    .email('Please provide a valid e-mail.')
    .required('is required'),
});

const initialValues = {
  name: '',
  email: '',
};

export default function Purchase() {
  const [plant, setPlant] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function handleFetchPlantDetail() {
      api.get(`/plant?id=${id}`).then(res => setPlant(res.data));
    }

    handleFetchPlantDetail();
  }, [id]);

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Ui.Container>
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
        <div className="boxInput">
          <h1>Nice pick!</h1>
          <p>
            Tell us your name and e-mail and we will get in touch regarding your
            order ;)
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            <Form encType="multipart/form-data">
              <Ui.Field>
                <label>Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Crazy Plant Person"
                />
                <ErrorMessage name="name">
                  {msg => (
                    <span className="errorMessage">
                      <img src={Erro} alt="erro" />
                      {msg}
                    </span>
                  )}
                </ErrorMessage>
              </Ui.Field>
              <Ui.Field>
                <label>Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="plantperson@email.com"
                />
                <ErrorMessage name="email">
                  {msg => (
                    <span className="errorMessage">
                      <img src={Erro} alt="erro" />
                      {msg}
                    </span>
                  )}
                </ErrorMessage>
              </Ui.Field>
            </Form>
          </Formik>
          <button type="submit">send</button>
        </div>
      </section>
    </Ui.Container>
  );
}
