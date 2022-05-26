import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const Item = styled.li<{ active?: boolean }>`
  margin-right: 50px;
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    color: ${({ active }) =>
      active ? "var(--color-primary)" : "var(--color-black)"};
  }
`;

export const Badge = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-white);
  text-align: center;
  font-size: 12px;
  background: var(--color-red);
`;
