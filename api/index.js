const express = require("express");
const cors = require("cors");

const app = express();

const uid = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substr(2);

  return `${head}${tail}`;
};

let users = [
  {
    id: uid(),
    network: "Drogarias Conviva",
    name: "André Gomes da Silva",
    cpf: "000.000.000-00",
    email: "andre.gomes@drogariasconviva.com.br",
    profile: "Administrador",
    status: true,
  },
  {
    id: uid(),
    network: "Drogarias Conviva",
    name: "Carolina Oliveira do Carmo Perez",
    cpf: "111.111.111-11",
    email: "carol.perez@drogariasconviva.com.br",
    profile: "Gestor Loja",
    status: false,
  },
  {
    id: uid(),
    network: "Drogarias Conviva",
    name: "Damiano Gustavo Souza Lino",
    cpf: "222.222.222-22",
    email: "damiano.lino@drogariasconviva.com.br",
    profile: "Gestor Rede",
    status: true,
  },
  {
    id: uid(),
    network: "Drogarias Conviva",
    name: "Eduardo Leite de Almeida Santos",
    cpf: "333.333.333-33",
    email: "eduardo.santos@drogariasconviva.com.br",
    profile: "Funcionário Loja",
    status: true,
  },
  {
    id: uid(),
    network: "Drogarias Conviva",
    name: "Fagner Soares de Lima",
    cpf: "444.444.444-44",
    email: "fagner.lima@drogariasconviva.com.br",
    profile: "Administrador",
    status: false,
  },
];

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

/* Returns all users */
app.get("/users", (req, res) => {
  return res.json(users);
});

/* Returns a user */
app.get("/users/:index", async (req, res) => {
  const { index } = req.params;

  const filtered = await users.find((el) => el.id === index);

  return res.json(filtered);
});

/* Create a user */
app.post("/users", (req, res) => {
  const { user } = req.body;
  const exists = users.find((el) => el.name === user.name);

  if (!exists) {
    users.push({ ...user, id: uid() });
  }

  return res.json(users);
});

/* Edit a user */
app.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { user } = req.body;

  users = users.filter((el) => el.id !== index);
  users.push(user);

  return res.send();
});

/* Remove a user */
app.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users = users.filter((el) => el.id !== index);

  return res.send();
});

app.listen(9000, () => {
  console.log("Server running on port 9000");
});
