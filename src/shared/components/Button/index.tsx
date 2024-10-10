import React from 'react';
import { ButtonStyle } from './style';

interface Prop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
function Button({ text }: Prop) {
  return (
    <button type="submit" className={ButtonStyle}>
      {text}
    </button>
  );
}

export default Button;
