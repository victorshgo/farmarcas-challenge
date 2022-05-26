import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "layouts";

import Bar from "components/Bar";
import Button from "components/Button";
import Table from "components/Table";

import { getUsers } from "services/users";

import { UsersProps } from "types/users";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UsersProps[]>([]);

  const handleClick = () => navigate("/new");

  useEffect(() => {
    (async () => {
      try {
        const response = await getUsers();
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Layout>
      <>
        <Bar
          title="Usuários"
          leftContent={
            <Button text="Novo usuário" size="large" onClick={handleClick} />
          }
        />
        {users && (
          <Table
            headers={["Rede", "Nome", "Perfil", "Status", ""]}
            data={users}
          />
        )}
      </>
    </Layout>
  );
};

export default Home;
