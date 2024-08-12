import {Endpoints, injectEndpoints} from './.base';

const accountEndpoint = injectEndpoints({
  endpoints: builder => ({
    addAddress: builder.mutation<IResponse<AddAddressResponse>, AddressProps>({
      invalidatesTags: ['GetProfile'],
      query: body => ({
        body,
        method: 'POST',
        url: `${Endpoints.address}add`,
      }),
    }),
    addDocs: builder.mutation<IResponse<UserProps>, AddDocsModel>({
      query: body => ({
        body,
        method: 'POST',
        url: `${Endpoints.kyc}add`,
      }),
    }),
    deleteAddress: builder.mutation<IResponse<unknown>, DeleteAddressModel>({
      query: body => ({
        body,
        method: 'DELETE',
        url: `${Endpoints.address}delete`,
      }),
    }),
    deleteDoc: builder.mutation<IResponse<unknown>, DeleteDocsModel>({
      query: body => ({
        method: 'DELETE',
        url: `${Endpoints.address}delete/${body.docId}?userId=${body.userId}`,
      }),
    }),
    getUserAccount: builder.query<IResponse<UserProps>, {userId: string}>({
      providesTags: ['GetUserAccount'],
      query: body => `${Endpoints.account}user-accounts/${body.userId}`,
    }),
    getUniqueId: builder.query<IResponse<number>, AccountIdModal>({
      providesTags: ['GetUserAccount'],
      query: ({accountId}) => {
        console.log('getUniqueId called');
        return `${Endpoints.account}/get-customer-Id/${accountId}`;
      },
    }),
    getAddress: builder.mutation<IResponse<unknown>, AccountModel>({
      query: body =>
        `${Endpoints.address}user-address/accountId?accountId=${body.accountId}`,
    }),
    getKycDoc: builder.mutation<IResponse<GetKYCDocsResponse[]>, UserIdModel>({
      query: ({userId}) => `${Endpoints.kyc}user-kyc-docs/${userId}`,
    }),
    ratifyKYC: builder.mutation<IResponse<unknown>, UserIdModel>({
      invalidatesTags: ['GetProfile'],
      query: ({userId}) => ({
        method: 'POST',
        url: `${Endpoints.kyc}ratify/${userId}`,
      }),
    }),
    updateAddress: builder.mutation<IResponse<unknown>, UpdateAddressModel>({
      invalidatesTags: ['GetProfile'],
      query: ({body, userId}) => ({
        body,
        method: 'PUT',
        url: `${Endpoints.address}update/${userId}`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  endpoints: accountEndpoints,
  useAddAddressMutation,
  useAddDocsMutation,
  useRatifyKYCMutation,
  useDeleteAddressMutation,
  useGetUserAccountQuery,
  useDeleteDocMutation,
  useGetAddressMutation,
  useGetUniqueIdQuery,
  useGetKycDocMutation,
  useUpdateAddressMutation,
} = accountEndpoint;
