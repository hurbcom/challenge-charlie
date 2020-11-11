export interface IOpenCage {
  documentation: string;
  licenses: ILicenses[];
  rate: IRate;
  results: IResults[];
  status: IStatus;
  stay_informed: IStayInformed;
  thanks: string;
  timestamp: ITimestamp;
  total_results: number;
}

export interface IAnnotations {
  DMS: string;
  MGRS: string;
  Maidenhead: string;
  Mercator: IMercator;
  OSM: IOSM;
  UN_M49: IUN_M49;
  callingcode: number;
  currency: ICurrency;
  flag: string;
  geohash: string;
  qibla: number;
  roadinfo: IRoadinfo;
  sun: ISun;
  timezone: ITimezone;
  what3words: IWhat3words;
}

export interface IBounds {
  northeast: ICoordinates;
  southwest: ICoordinates;
}

export interface IComponents {
  _category: string;
  _type: string;
  city?: string;
  city_district: string;
  continent: string;
  country: string;
  country_code: string;
  county: string;
  house_number?: string;
  'ISO_3166-1_alpha-2': string;
  'ISO_3166-1_alpha-3': string;
  municipality: string;
  neighbourhood?: string;
  political_union?: string;
  postcode: string;
  region?: string;
  road: string;
  road_type?: string;
  state: string;
  state_code?: string;
  state_district?: string;
  suburb: string;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface ICurrency {
  decimal_mark: string;
  html_entity: string;
  iso_code: string;
  iso_numeric: string;
  name: string;
  smallest_denomination: number;
  subunit: string;
  subunit_to_unit: number;
  symbol: string;
  symbol_first: number;
  thousands_separator: string;
}

export interface ILicenses {
  name: string;
  url: string;
}

export interface ILocation {
  locationName: string;
}

export interface IMercator {
  x: number;
  y: number;
}

export interface IOSM {
  edit_url: string;
  note_url: string;
  url: string;
}

export interface IRate {
  limit: number;
  remaining: number;
  reset: number;
}

export interface IResults {
  annotations: IAnnotations;
  bounds: IBounds;
  components: IComponents;
  confidence: number;
  formatted: string;
  geometry: ICoordinates;
}

export interface IRoadinfo {
  drive_on: string;
  road: string;
  road_type?: string;
  speed_in: string;
}

export interface IStatus {
  code: number;
  message: string;
}

export interface IStayInformed {
  blog: string;
  twitter: string;
}

export interface ISun {
  rise: ISunDetails;
  set: ISunDetails;
}

export interface ISunDetails {
  apparent: number;
  astronomical: number;
  civil: number;
  nautical: number;
}

export interface ITimestamp {
  created_http: string;
  created_unix: number;
}

export interface ITimezone {
  name: string;
  now_in_dst: number;
  offset_sec: number;
  offset_string: string;
  short_name: string;
}

export interface IUN_M49 {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  regions: any;
  statistical_groupings: string[];
}

export interface IWhat3words {
  words: string;
}
