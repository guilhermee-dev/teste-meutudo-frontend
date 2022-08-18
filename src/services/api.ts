import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Oportunities } from "../@types/Oportunities";
import { Periods } from "../@types/Periods";
import { Values } from "../@types/Values";

const baseUrl = process.env.BASE_URL;

export const ApiService = createApi({
  reducerPath: "ApiService",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOportunities: builder.query<Oportunities, void>({
      query: () => `/test`,
    }),
    getValues: builder.query<Values, void>({
      query: () => `/test/values`,
    }),
    getPeriods: builder.query<Periods, void>({
      query: () => `/test/installments`,
    }),
  }),
});

export const {
  useGetOportunitiesQuery,
  useGetValuesQuery,
  useGetPeriodsQuery,
} = ApiService;
