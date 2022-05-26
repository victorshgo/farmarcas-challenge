import { ButtonProps } from "./types";

import { Button as ButtonComponent } from "./styles";

const Button = ({
  icon,
  text,
  size = "medium",
  color,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonComponent size={size} color={color} onClick={onClick}>
      {icon} {text && <>&nbsp;{text}</>}
    </ButtonComponent>
  );
};

export default Button;
