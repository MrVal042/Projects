import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  RootContainer,
  Text,
  Form,
  FormInput,
  SignupValidationSchema,
} from '@component';
import {Colors} from '@constant';
import {OnSubmitProps, SetScreenProps} from '.';

export default function Signup({
  handleScreen,
  onSubmit,
}: {
  handleScreen: SetScreenProps;
  onSubmit: OnSubmitProps;
}) {
  return (
    <RootContainer title="Signup">
      <Form
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        labelSubmit="SignUp"
        validationSchema={SignupValidationSchema}
        footerComponent={
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => handleScreen('login')}
              style={{paddingHorizontal: 5}}>
              <Text color={Colors.primary}>Login</Text>
            </TouchableOpacity>
          </View>
        }
        onSubmit={onSubmit}>
        <FormInput
          label="FirstName"
          placeholder="Enter firstName"
          name="firstName"
        />
        <FormInput
          label="LastName"
          placeholder="Enter lastName"
          name="lastName"
        />
        <FormInput label="Email" placeholder="Enter email" name="email" />
        <FormInput
          secureTextEntry
          name="password"
          label="Password"
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
