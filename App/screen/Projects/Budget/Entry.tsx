import React, {useState} from 'react';

import Budget from './Budget';
import {Authentication} from '@screen';

export default function Entry() {
  const [isValidated, setIsValidated] = useState(false);

  const handleFormSubmit = (values: Record<string, string>) => {
    console.log('Form submitted with values:', values);
    setIsValidated(true);
  };

  return !isValidated ? (
    <Authentication onSubmit={handleFormSubmit} />
  ) : (
    <Budget />
  );
}
