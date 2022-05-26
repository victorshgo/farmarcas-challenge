import { BarProps } from "./types";

import { Bar as BarComponent, Title } from "./styles";

const Bar = ({ title, leftContent }: BarProps) => {
  return (
    <BarComponent>
      <Title>{title}</Title>
      {leftContent}
    </BarComponent>
  );
};

export default Bar;
