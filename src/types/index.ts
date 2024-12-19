export interface City {
  id: string;
  name: string;
  country: string;
  temp: number;
  weather: string;
  photo: UnsplashPhoto;
  lat: number;
  lon: number;
}

export interface WeatherResponse {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
  }>;
  coord: {
    lat: number;
    lon: number;
  };
}

export interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
    full: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
  links: {
    download_location: string;
  };
}