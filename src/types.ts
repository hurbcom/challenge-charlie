export type Coordinates = {
  latitude?: number;
  longitude?: number;
};

export type Location = {
  country: string;
  state: string;
  city: string;
};

export type PossibleLocation = {
  country: string;
  state: string;
  city?: string;
  municipality?: string;
  district?: string;
};
