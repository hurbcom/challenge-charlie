import React from "react";

declare global {
  interface IContainerProps {
    children: React.ReactNode;
  }

  interface IHeaderProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>> {
    children: React.ReactNode;
  }

  interface ISegmentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
  }

  interface ITemperatureDayProps extends React.HTMLAttributes<HTMLDivElement> {
    dayDescription: string;
    temperature: string;
    maxTemperature?: string;
    minTemperature?: string;
    children?: React.ReactNode;
    onClick: () => void;
  }

  interface IDetailsTemperatureProps
    extends React.HTMLAttributes<HTMLDivElement> {
    climate: string;
    humidity: string;
    pressure: string;
    wind: string;
  }

  interface IMessageNegativeProps {
    mensage: string;
  }

  interface IContentProps extends React.HTMLAttributes<HTMLElement> {
    text: {
      today: string;
      tomorrow: string;
      afterTomorrow: string;
    };
    dataCurrent: {
      climateFigure: string;
      dayDescription: string;
      temperature: string;
      maxTemperature: string;
      minTemperature: string;
      climate: string;
      humidity: string;
      pressure: string;
      wind: string;
    };
    dataForecast: {
      temperatureTomorrow: string;
      maxTemperatureTomorrow: string;
      minTemperatureTomorrow: string;
      temperatureAfterTomorrow: string;
      maxTemperatureAfterTomorrow: string;
      minTemperatureAfterTomorrow: string;
    };
    variant: "Yellow" | "Blue" | "Red" | "White";
    onClick: () => void;
  }

  interface IInternalHeaderProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeLanguage: () => void;
  }

  interface IHomeProps extends IContentProps, IInternalHeaderProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeLanguage: () => void;
    isLoading: boolean;
  }

  interface IBingImageResponse {
    data: {
      images: {
        startdate: number;
        enddate: number;
        url: string;
        copyright: string;
        title: string;
      };
    };
  }

  interface IOpenCageDataResponse {
    data: {
      results: [
        {
          formatted: string;
          components: {
            city_district: string;
            continent: string;
            country: string;
            country_code: string;
            county: string;
            municipality: string;
            postcode: string;
            region: string;
            road: string;
            road_type: string;
            state: string;
            state_code: string;
            state_district: string;
            suburb: string;
          };
        }
      ];
    };
  }

  interface IMainWhaether {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  }

  interface ICurrentClimateResponse {
    main: IMainWhaether;
    weather: IWheather[];
    wind: {
      deg: number;
      speed: number;
    };
  }

  interface IForecastClimateResponse {
    list: [
      {
        dt_txt: string;
        main: IMainWhaether[];
      }
    ];
  }

  interface IWheather {
    description: string;
    icon: string;
    id: number;
    main: string;
  }
  interface IUnitMensure {
    temperature: string;
    speed: string;
  }

  interface ICurrentClimate {
    climateFigure: any;
    dayDescription: string;
    temperature: string;
    maxTemperature: string;
    minTemperature: string;
    climate: string;
    humidity: string;
    pressure: string;
    wind: string;
    temperatureNumber: number;
  }

  interface IForecastClimate {
    temperatureTomorrow: string;
    maxTemperatureTomorrow: string;
    minTemperatureTomorrow: string;
    temperatureAfterTomorrow: string;
    maxTemperatureAfterTomorrow: string;
    minTemperatureAfterTomorrow: string;
  }

  interface ICoordinates {
    lat?: number | string;
    lng?: number | string;
  }

  interface IGeoLocation {
    loaded: boolean;
    coordinates?: ICoordinates;
    error?: {
      code: number;
      message: string;
    };
  }
}

export {};
