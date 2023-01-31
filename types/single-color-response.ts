export interface SingleColorResponse {
  data: Data;
  support: Support;
}

export interface Data {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface Support {
  url: string;
  text: string;
}
