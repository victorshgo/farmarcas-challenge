import { FaExclamationCircle } from "react-icons/fa";

import { TextProps } from "./types";

import { FormItems, Label, LabelContent, Input } from "./styles";

const Text = ({ id, label, value, error = false, handleChange }: TextProps) => {
  return (
    <FormItems>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        id={id}
        name={id}
        defaultValue={value}
        onChange={handleChange}
        error={error}
      />

      <Label htmlFor={id} color="var(--color-red)">
        {error && (
          <LabelContent>
            <FaExclamationCircle /> &nbsp;Mensagem de erro
          </LabelContent>
        )}
      </Label>
    </FormItems>
  );
};

export default Text;
