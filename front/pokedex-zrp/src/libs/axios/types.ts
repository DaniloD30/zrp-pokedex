import type { AxiosError } from 'axios';

type Error = {
  code: number;
  name: string;
  message: string;
  status: number;
  hint: string;
};

type Response<Data> = {
  data: Data;
};

export type ApiPaginationResponse<T> = {
  metadata: {
    current_page: number;
    current_size: number;
    total_size: number;
    total_pages: number;
  };
  items: T;
};

export type ApiError = AxiosError<Error>;
export type ApiResponse<Data> = Response<Data>;
