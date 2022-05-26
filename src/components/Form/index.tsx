import Text from "components/Inputs/Text";
import Select from "components/Inputs/Select";

import { FormProps } from "./types";

import { FormContent } from "./styles";

const Form = ({ user, error = false, handleChange }: FormProps) => {
  return (
    <FormContent>
      <form>
        <div>
          <Text
            id="name"
            label="Nome do usuário:"
            value={user.name}
            handleChange={handleChange}
            error={error && user.name === ""}
          />
          <Text
            id="email"
            label="E-mail:"
            value={user.email}
            handleChange={handleChange}
            error={error && user.email === ""}
          />
          <Select
            id="network"
            label="Rede:"
            data={["Todas as redes", "Drogarias Conviva", "Entrefarma"]}
            handleChange={handleChange}
            observation={true}
          />
        </div>

        <div>
          <Text
            id="cpf"
            label="CPF:"
            value={user.cpf ?? ""}
            handleChange={handleChange}
            error={error && user.cpf === ""}
          />
          <Select
            id="profile"
            label="Perfil de acesso:"
            data={[
              "Administrador",
              "F/F",
              "Gestor Rede",
              "Gestor Loja",
              "Funcionário Loja",
            ]}
            handleChange={handleChange}
          />
          <Select
            id="store"
            label="Loja:"
            data={["Todas as lojas"]}
            handleChange={handleChange}
            observation={true}
            disabled
          />
        </div>
      </form>
    </FormContent>
  );
};

export default Form;
