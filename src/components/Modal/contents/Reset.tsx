import { FaLock } from "react-icons/fa";

import Button from "../../Button";

import { ModalContentProps } from "./types";

import { Content, Image, Title, Description, Buttons } from "./styles";

const Reset = ({ handleClose }: ModalContentProps) => {
  return (
    <Content>
      <Image
        color="var(--color-primary)"
        background="var(--color-light-orange)"
      >
        <FaLock />
      </Image>
      <Title>Resetar senha</Title>
      <Description>Você deseja resetar a senha deste usuário?</Description>
      <Buttons>
        <Button size="large" text="Não" onClick={handleClose} />
        <Button
          size="large"
          text="Sim"
          color="var(--color-white)"
          onClick={handleClose}
        />
      </Buttons>
    </Content>
  );
};

export default Reset;
