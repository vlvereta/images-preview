export interface IBaseState<T = any, E = any> {
  isFetching: boolean;
  data: T;
  error: E;
}
