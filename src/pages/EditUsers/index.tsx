import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaSave, FaTimes } from "react-icons/fa";

import Layout from "layouts";

import Bar from "components/Bar";
import Button from "components/Button";
import Switch from "components/Switch";
import Form from "components/Form";
import Modal from "components/Modal";
import Reset from "components/Modal/contents/Reset";
import Delete from "components/Modal/contents/Delete";
import Success from "components/Modal/contents/Success";

import { UsersProps } from "types/users";
import { getUsersByIndex, editUsers } from "services/users";
import { userDefault } from "mocks/user";

import { LeftContent } from "./styles";

const EditUsers = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<UsersProps>(userDefault);
  const [isOpenSave, setIsOpenSave] = useState<boolean>(false);
  const [isOpenReset, setIsOpenReset] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);

  const handleOpenReset = () => setIsOpenReset(true);
  const handleCloseReset = () => setIsOpenReset(false);

  const handleOpenDelete = () => setIsOpenDelete(true);
  const handleCloseDelete = () => setIsOpenDelete(false);

  const handleOpenSave = async () => {
    await editUsers(user);
    setIsOpenSave(true);
  };

  const handleCloseSave = () => {
    setIsOpenSave(false);
    navigate("/");
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values: UsersProps) => ({ ...values, [name]: value }));
  };

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    const name = event.target.name;
    setUser((values: UsersProps) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const response = await getUsersByIndex(id);
          if (response.status === 200) {
            setUser(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [id]);

  return (
    <Layout>
      <>
        <Bar
          title="Editar usuário"
          leftContent={
            <LeftContent>
              <Switch active={user?.status} handleChange={handleChangeSwitch} />
              <Button
                icon={<AiOutlineThunderbolt />}
                text="Resetar senha"
                color="var(--color-white)"
                onClick={handleOpenReset}
              />
              <Button
                icon={<FaSave />}
                text="Salvar alterações"
                onClick={handleOpenSave}
              />
              <Button
                icon={<FaTimes />}
                text="Excluir usuários"
                color="var(--color-red)"
                onClick={handleOpenDelete}
              />
            </LeftContent>
          }
        />

        <Form user={user} handleChange={handleChange} />

        <Modal isOpen={isOpenSave} handleClose={handleCloseSave}>
          <Success />
        </Modal>

        <Modal isOpen={isOpenReset} handleClose={handleCloseReset}>
          <Reset id={user?.id} handleClose={handleCloseReset} />
        </Modal>

        <Modal isOpen={isOpenDelete} handleClose={handleCloseDelete}>
          <Delete id={user?.id} handleClose={handleCloseDelete} />
        </Modal>
      </>
    </Layout>
  );
};

export default EditUsers;
