export type InputsData = {
  inputName: string;
  placeholder: string;
  inputType: string;
  isRequired: boolean;
};

export interface FormTypes {
  title?: string | "";
  description?: string | "";
  inputs?: InputsData[] | [];
  buttonText: string | "";
  bottomText?: string | React.ReactNode;
  agreementText?: string | "";
  onSubmit: (values: Record<string, any>) => void;
  className: string;
}
