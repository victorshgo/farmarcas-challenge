import { SelectProps } from "./types";

import { FormItems, Label } from "./styles";

const Select = ({
  id,
  label,
  data,
  disabled = false,
  observation = false,
  handleChange,
}: SelectProps) => {
  return (
    <FormItems>
      <Label htmlFor={id}>{label}</Label>
      <select id={id} name={id} disabled={disabled} onChange={handleChange}>
        {data.map((el: string, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>
      <Label htmlFor={id}>
        {observation && "Você pode indicar mais de uma rede"}
      </Label>
    </FormItems>
  );
};

export default Select;
