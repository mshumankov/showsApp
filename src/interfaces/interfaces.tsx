export interface IState {
  darkMode: boolean;
  showsAll: any[];
  showsView: any[];
  page: number;
  showDetails: {};
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IShow {
  externals: { tvrage: number; thetvdb: number; imdb: string };
  genres: string[];
  id: number;
  language: string;
  name: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  status: string;
  summary: string;
}
