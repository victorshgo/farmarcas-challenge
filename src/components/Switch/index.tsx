import { SwitchProps } from "./types";

import { Content, Switch as SwitchComponent, Slider, Input } from "./styles";

const Switch = ({ active = false, handleChange = () => {} }: SwitchProps) => {
  return (
    <Content>
      <SwitchComponent className="switch">
        <Input
          name="status"
          type="checkbox"
          checked={active}
          onChange={handleChange}
        />
        <Slider className="slider round"></Slider>
      </SwitchComponent>
      <span>{active ? "Ativo" : "Inativo"}</span>
    </Content>
  );
};

export default Switch;
