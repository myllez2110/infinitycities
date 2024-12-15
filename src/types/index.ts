export interface City {
  id: string;  // Changed from number to string
  name: string;
  country: string;
  temp: number;
  weather: string;
  imageUrl: string;
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