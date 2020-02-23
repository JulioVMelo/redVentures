import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Ui from './styles';

import Erro from '../../assets/images/icons/error.png';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Z]{2,}( )[a-zA-Z]{2,}/, 'Deve conter name and surname')
    .min(4, '4 caractere required')
    .required('is required'),
  email: yup
    .string()
    .email('Please provide a valid e-mail.')
    .required('is required'),
});

const initialValues = {
  name: '',
  email: '',
};

export default function BoxInput({ handleSubmit }) {
  return (
    <Ui.Container>
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
            <Field name="name" type="text" placeholder="Crazy Plant Person" />
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
          <button type="submit">send</button>
        </Form>
      </Formik>
    </Ui.Container>
  );
}
