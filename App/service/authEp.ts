import {LoginModel, LogOutModel} from 'service/.base/models';
import {Endpoints, injectEndpoints} from './.base';

const authenticationEndpoints = injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<IResponse<UserProps>, LoginModel>({
      invalidatesTags: ['GetWallets'],
      query: body => {
        return {
          body,
          method: 'POST',
          url: `${Endpoints.auth}login`,
        };
      },
    }),
    logout: builder.mutation<IResponse<UserProps>, LogOutModel>({
      invalidatesTags: ['GetWallets'],
      query: body => {
        return {
          body,
          method: 'POST',
          url: `${Endpoints.auth}logout`,
        };
      },
    }),
    confirmCode: builder.mutation<IResponse<UserProps>, OTPModel>({
      query: body => ({
        body,
        method: 'PATCH',
        url: `${Endpoints.auth}confirm-email`,
      }),
    }),
    forgotPassword: builder.mutation<IResponse<unknown>, ForgotPasswordModel>({
      query: body => ({
        body,
        method: 'POST',
        url: `${Endpoints.auth}forgot-password`,
      }),
    }),
    resetPassword: builder.mutation<IResponse<unknown>, ResetPasswordModel>({
      query: body => ({
        body,
        method: 'PATCH',
        url: `${Endpoints.auth}reset-password`,
      }),
    }),
    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenModel>({
      invalidatesTags: ['GetWallets'],
      query: body => ({
        body,
        method: 'PATCH',
        url: `${Endpoints.auth}refresh-token`,
      }),
    }),
    resendCode: builder.mutation<IResponse<unknown>, ResendOTPModel>({
      query: body => ({
        body,
        method: 'POST',
        url: `${Endpoints.auth}resend-confirmation-code`,
      }),
    }),
    sendOTP: builder.mutation<IResponse<unknown>, ResendOTPModel>({
      query: body => ({
        body,
        method: 'POST',
        url: `${Endpoints.auth}send-otp`,
      }),
    }),
    verifyOTP: builder.mutation<
      RefreshTokenResponse,
      {email: string; token: string}
    >({
      invalidatesTags: ['GetWallets'],
      query: body => ({
        body,
        method: 'PATCH',
        url: `${Endpoints.auth}verify-otp`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  endpoints: authEndpoints,
  useLoginMutation,
  useConfirmCodeMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useRefreshTokenMutation,
  useResetPasswordMutation,
  useResendCodeMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
} = authenticationEndpoints;
