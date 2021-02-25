export interface User {
  avatar_url: string;
  login: string;
  id: number;
  html_url: string;
}

export interface UserHistory {
  login: string;
  action: string;
  avatar_url: string;
  name: string;
  html_url: string;
  created_at: string;
}

export interface Repo {
  name: string;
}
