import React from 'react';

const Button = ({ className, text, type }) => (
  <button type={type} className={className}>{text}</button>
)

export default Button;