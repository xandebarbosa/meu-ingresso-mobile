export interface User {
  name: string;
  cellPhone: string;
}

export interface Slice {
  user: User;
  token: string;
}
