export interface ContactFormData {
  name: string;
  email: string;
  number: number;
  message: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof ContactFormData]?: string[];
  };
  inputs?: ContactFormData;
}
