export interface SelectProps {
  id: string;
  label: string;
  data: string[];
  disabled?: boolean;
  observation?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TextProps {
  id: string;
  label: string;
  value: string;
  error?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
