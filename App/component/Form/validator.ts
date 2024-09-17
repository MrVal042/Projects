import * as Yup from 'yup';

const passwordRegExr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

export const validateYulObj = (obj: Yup.ObjectShape) => {
  return Yup.object().shape(obj);
};
export const email = Yup.string()
  .required('Please enter your email')
  .email('Email is invalid')
  .label('Email');
export const otp = Yup.string()
  .required('Please enter your otp')
  .min(4, 'OTP must be at least 4 characters long')
  .label('OTP');
  
export const password = Yup.string()
  .matches(
    passwordRegExr,
    'Password must contain at least 5 characters, including UPPER/lowercase and numbers',
  )
  .required('Please enter your password')
  .min(8, 'Password must be at least 8 characters long')
  .label('Password');

export const password2 = Yup.string()
  .matches(passwordRegExr, 'Please enter your password')
  .required('Please enter your password')
  .min(8, 'Password must be at least 8 characters long')
  .label('Password');

export const firstName = Yup.string()
  .required('Please input your first name')
  .min(3, 'First name must be at least 3 digits long')
  .label('First Name');

export const lastName = Yup.string()
  .required('Please input your first name')
  .min(3, 'First name must be at least 3 digits long')
  .label('First Name');

export const confirmPassword = Yup.string()
  .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
  .required('Please confirm your password');

export const LoginValidationSchema = validateYulObj({
  email,
  password: password2,
});

export const SignupValidationSchema = validateYulObj({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
});
