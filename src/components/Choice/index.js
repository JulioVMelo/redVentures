import React from 'react';
import PropTypes from 'prop-types';
import * as Ui from './styles';

export default function Choice({
  background,
  color,
  children,
  value,
  handleChange,
  label,
}) {
  return (
    <Ui.Container color={color} background={background}>
      <input
        name="a"
        id={label}
        type="radio"
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
      <label htmlFor={label}>
        {children}
        <span>{label}</span>
      </label>
    </Ui.Container>
  );
}

Choice.propTypes = {
  background: PropTypes.bool,
  color: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

Choice.defaultProps = {
  background: false,
  color: '',
  value: '',
  handleChange: () => {},
  label: '',
};
