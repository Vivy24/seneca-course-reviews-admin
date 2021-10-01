declare module '@common' {
    import { AxiosError } from 'axios';
  
    type HasMessage = { message: string };
    type TResultError = {
      type: 'error';
      error: HasMessage | Error;
      timestamp: string;
      data: null;
    };
  
    type TResultSuccess<Data = unknown> = {
      type: 'success';
      data: Data;
      timestamp: string;
      error: null;
    };
  
    type TResult<Data = unknown> = TResultSuccess<Data> | TResultError;
  
    type ApiQuery = Record<string, number | string | string[]>;
  
    type ApiError = AxiosError<TResultError>;
  
    type ValidateQuery<T extends ApiQuery> = (query: ApiQuery) => TResult<T>;
  }