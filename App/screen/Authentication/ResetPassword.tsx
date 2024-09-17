import React from 'react';
import {
  RootContainer,
  Form,
  FormInput,
  LoginValidationSchema,
} from '@component';
import {OnSubmitProps} from '.';

export default function ResetPassword({onSubmit}: {onSubmit: OnSubmitProps}) {
  return (
    <RootContainer title="Reset Password">
      <Form
        initialValues={{otp: '', password: '', confirmPassword: ''}}
        validationSchema={LoginValidationSchema}
        labelSubmit="Login"
        onSubmit={onSubmit}>
        <FormInput
          secureTextEntry
          name="password"
          label="New Password"
          placeholder="Enter Password"
        />
        <FormInput
          secureTextEntry
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Enter confirmPassword"
        />
      </Form>
    </RootContainer>
  );
}
