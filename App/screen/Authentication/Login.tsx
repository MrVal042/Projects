import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  RootContainer,
  Text,
  Form,
  FormInput,
  LoginValidationSchema,
} from '@component';
import {Colors} from '@constant';
import {SetScreenProps, OnSubmitProps} from '.';

export default function Login({
  handleScreen,
  onSubmit,
}: {
  handleScreen: SetScreenProps;
  onSubmit: OnSubmitProps;
}) {
  return (
    <RootContainer title="Login">
      <Form
        initialValues={{email: '', password: ''}}
        validationSchema={LoginValidationSchema}
        labelSubmit="Login"
        headerComponent={
          <Text variant="title" size={22}>
            Welcome Back!
          </Text>
        }
        footerComponent={
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => handleScreen('signup')}
              style={{paddingHorizontal: 5}}>
              <Text color={Colors.primary}>Signup</Text>
            </TouchableOpacity>
          </View>
        }
        onSubmit={onSubmit}>
        <FormInput label="Email" placeholder="Enter email" name="email" />
        <FormInput
          secureTextEntry
          name="password"
          label="Password"
          placeholder="Enter Password"
        />
        <TouchableOpacity
          onPress={() => handleScreen('forgotPassword')}
          style={{alignSelf: 'flex-end', width: '35%'}}>
          <Text textAlign="center" color={Colors.primary}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </Form>
    </RootContainer>
  );
}
