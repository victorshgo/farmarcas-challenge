import { UsersProps } from "types/users";

export interface FormProps {
  user: UsersProps;
  error?: boolean;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}
