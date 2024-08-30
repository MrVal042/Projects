import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Divider, RootContainer} from '@component';
import ReactNativeBiometrics, {BiometryType} from 'react-native-biometrics';

const biometrics = new ReactNativeBiometrics({allowDeviceCredentials: true});
type biometryInfoProps = {
  available: boolean;
  biometryType: BiometryType | undefined;
  error: string | undefined;
} | null;
export default function Biometric() {
  const [biometryInfo, setBiometryInfo] = useState<biometryInfoProps>(null);

  useEffect(() => {
    // Check what kind of biometrics is available
    CheckBiometryType().then(bt => {
      if (!bt.available) {
        deleteBiometryPublicKey();
      }
      setBiometryInfo(bt);
    });
  }, []);

  return (
    <RootContainer title="Biometric">
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        {biometryInfo?.biometryType ? (
          <Text>Biometry Type: {biometryInfo?.biometryType}</Text>
        ) : null}
        <Text>
          Biometry is {biometryInfo?.available ? '' : 'not'} available
        </Text>
        <Divider />
        <Button label="Authenticate" onPress={loginWithBiometrics} />
      </View>
    </RootContainer>
  );
}

const CheckBiometryType = async () => {
  const {available, biometryType, error} = await biometrics.isSensorAvailable();
  console.log('biometryType:', biometryType, 'available', available);
  return {available, biometryType, error};
};

const generateBiometryPublicKey = async () => {
  try {
    const {keysExist} = await biometrics.biometricKeysExist();
    if (keysExist) {
      throw new Error('Biometric key exists');
    }
    const {publicKey} = await biometrics.createKeys();
    console.log('publicKey:', publicKey);
  } catch (error) {
    console.log('error:', error);
  }
};

const deleteBiometryPublicKey = async () => {
  try {
    const {keysDeleted} = await biometrics.deleteKeys();
    if (!keysDeleted) {
      throw new Error('Can not remove biometry key');
    }
    console.log('keysDeleted:', keysDeleted);
  } catch (error) {
    console.log('error:', error);
  }
};

const loginWithBiometrics = async () => {
  try {
    const isBiometryAvailable = CheckBiometryType();
    if (!isBiometryAvailable) {
      throw new Error('Biometric not available');
    }
    console.log('biometrics:', biometrics);
    generateBiometryPublicKey();
    const {success, signature} = await biometrics.createSignature({
      promptMessage: 'Sign in',
      payload: '1234567890',
    });
    if (!success) {
      throw new Error('Biometrics authentication failed');
    }
    console.log(signature);
    if (signature) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('error:', JSON.stringify(error));
    return false;
  }
};
