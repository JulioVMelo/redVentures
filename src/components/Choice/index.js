import React from 'react';
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
