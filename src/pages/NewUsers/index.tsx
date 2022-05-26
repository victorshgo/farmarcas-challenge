import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave } from "react-icons/fa";

import Layout from "layouts";

import Bar from "components/Bar";
import Button from "components/Button";
import Form from "components/Form";
import Modal from "components/Modal";
import Success from "components/Modal/contents/Success";

import { UsersProps } from "types/users";
import { createUsers } from "services/users";
import { userDefault } from "mocks/user";

const NewUsers = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UsersProps>(userDefault);
  const [error, setError] = useState<boolean>(false);
  const [isOpenSave, setIsOpenSave] = useState<boolean>(false);

  const handleOpenSave = async () => {
    if (
      user.name === "" ||
      user.email === "" ||
      user.cpf === "" ||
      user.network === "" ||
      user.profile === ""
    ) {
      setError(true);
      console.log(user);
    } else {
      await createUsers(user);
      setIsOpenSave(true);
    }
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

  return (
    <Layout>
      <>
        <Bar
          title="Novo usuário"
          leftContent={
            <Button
              icon={<FaSave />}
              text="Salvar alterações"
              onClick={handleOpenSave}
            />
          }
        />

        <Form user={user} error={error} handleChange={handleChange} />

        <Modal isOpen={isOpenSave} handleClose={handleCloseSave}>
          <Success />
        </Modal>
      </>
    </Layout>
  );
};

export default NewUsers;
