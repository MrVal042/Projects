// ======================Authentication===========================

export interface LoginModel {
  email: string;
  password: string;
  dStr: string;
}
export interface LogOutModel {
  userId: string;
  dStr: string;
}

export interface ConfirmForgotModel {
  phone_number: string;
  confirmation_code: string;
  new_password: string;
}
