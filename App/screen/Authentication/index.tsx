import React, {useState} from 'react';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Signup from './Signup';
import Login from './Login';

type IScreen = 'login' | 'signup' | 'forgotPassword' | 'resetPassword';
type IValues = Record<string, string>;
export type OnSubmitProps = (values: IValues, screen?: IScreen) => void;
export type SetScreenProps = React.Dispatch<React.SetStateAction<IScreen>>;

export default function Authentication({onSubmit}: {onSubmit: OnSubmitProps}) {
  const [screen, handleScreen] = useState<IScreen>('login');
  const [values, setValues] = useState<IValues>({});

  switch (screen) {
    case 'forgotPassword':
      return (
        <ForgotPassword
          {...{
            handleScreen,
            onSubmit(result) {
              setValues(result);
              handleScreen('resetPassword');
            },
          }}
        />
      );
    case 'resetPassword':
      return (
        <ResetPassword
          {...{
            email: values.email as string,
            onSubmit(result) {
              setValues(result);
              onSubmit(result, 'login');
            },
          }}
        />
      );
    case 'signup':
      return (
        <Signup
          {...{
            handleScreen,
            onSubmit(result) {
              setValues(result);
              onSubmit(result, 'login');
            },
          }}
        />
      );
    default:
      return (
        <Login
          {...{
            handleScreen,
            onSubmit(result) {
              setValues(result);
              onSubmit(result);
            },
          }}
        />
      );
  }
}
