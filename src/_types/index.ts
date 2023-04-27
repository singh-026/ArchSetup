// RootStack Params------
export interface RootStackParamList {
  [key: string]: undefined;
  // contains the list of all the screens and their def props and types
}

// counter types-------
export interface CounterState {
  value: number;
  loading: false;
  entities: [];
}
