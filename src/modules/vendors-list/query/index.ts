import { API_URL } from "../../../shared/constants";
import { GetVendorsListRequest, GetVendorsListResponse } from "./models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vendorsApi = createApi({
  reducerPath: "vendorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getVendors: builder.query<GetVendorsListResponse, GetVendorsListRequest>({
      query: params => ({ url: `/restaurant/vendors-list`, params: params }),
    }),
  }),
});

export const { useGetVendorsQuery } = vendorsApi;
