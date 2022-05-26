import { FaCheckCircle } from "react-icons/fa";

import { Content, Image, Title } from "./styles";

const Success = () => {
  return (
    <Content>
      <Image color="var(--color-green)" background="var(--color-light-green)">
        <FaCheckCircle />
      </Image>
      <Title>Informações salvas com sucesso!</Title>
    </Content>
  );
};

export default Success;
