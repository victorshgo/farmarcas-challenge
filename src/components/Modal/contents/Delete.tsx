import { FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { deleteUsers } from "services/users";

import Button from "../../Button";

import { ModalContentProps } from "./types";

import { Content, Image, Title, Description, Buttons } from "./styles";

const Delete = ({ id, reload, handleClose }: ModalContentProps) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    await deleteUsers(id);
    navigate("/");

    if (reload) window.location.reload();
  };

  return (
    <Content>
      <Image color="var(--color-red)" background="var(--color-light-red)">
        <FaExclamationCircle />
      </Image>
      <Title>Excluir usuário</Title>
      <Description>
        Você deseja excluir este usuário definitivamente?
      </Description>
      <Description>Esta ação não poderá ser desfeita.</Description>
      <Buttons>
        <Button size="large" text="Não" onClick={handleClose} />
        <Button
          size="large"
          text="Sim"
          color="var(--color-white)"
          onClick={handleClick}
        />
      </Buttons>
    </Content>
  );
};

export default Delete;
