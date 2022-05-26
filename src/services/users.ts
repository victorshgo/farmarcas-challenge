import api from "configs/axios";

import { UsersProps } from "types/users";

export async function getUsers() {
  const res = await api.get("/users");
  return res;
}

export async function getUsersByIndex(index: number | string) {
  const res = await api.get(`/users/${index}`);
  return res;
}

export async function createUsers(user: UsersProps) {
  const res = await api.post(`/users`, {
    user: user,
  });
  return res;
}

export async function deleteUsers(index: number | string) {
  const res = await api.delete(`/users/${index}`);
  return res;
}

export async function editUsers(user: UsersProps) {
  const res = await api.put(`/users/${user.id}`, {
    user: user,
  });
  return res;
}
