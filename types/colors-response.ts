export interface ColorsResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ColorElement[];
  support: Support;
}

export interface ColorElement {
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
