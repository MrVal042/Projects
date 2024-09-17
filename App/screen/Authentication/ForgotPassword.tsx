import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  RootContainer,
  Text,
  Form,
  FormInput,
  validateYulObj,
  otp,
  Divider,
} from '@component';
import {Colors} from '@constant';
import {OnSubmitProps, SetScreenProps} from '.';

export default function ForgotPassword({
  onSubmit,
  handleScreen,
}: {
  onSubmit: OnSubmitProps;
  handleScreen: SetScreenProps;
}) {
  const handleResend = () => {};
  return (
    <RootContainer
      title="Forgot Password"
      onBackPress={() => handleScreen('login')}>
      <Form
        initialValues={{otp: ''}}
        validationSchema={validateYulObj({otp})}
        headerComponent={
          <>
            <Divider />
            <Text size={16}>
              A mail containing OTP have been sent {'\n'}to the registered email
              address
            </Text>
          </>
        }
        footerComponent={
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text>Didn't receive OTP?</Text>
            <TouchableOpacity
              onPress={handleResend}
              style={{paddingHorizontal: 5}}>
              <Text color={Colors.primary}>Resend</Text>
            </TouchableOpacity>
          </View>
        }
        onSubmit={onSubmit}>
        <FormInput label="Enter OTP" placeholder="Enter OTP" name="otp" />
      </Form>
    </RootContainer>
  );
}
