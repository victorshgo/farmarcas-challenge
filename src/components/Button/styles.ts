import styled from "styled-components";

import { ButtonStyledProps } from "./types";

export const Button = styled.button<ButtonStyledProps>`
  cursor: pointer;
  margin-left: 10px;
  padding: ${({ size }) => (size === "large" ? "15px 35px" : "10px 20px")};
  display: flex;
  align-items: flex-start;
  border: ${({ color }) =>
    color === "var(--color-white)"
      ? "0.1px solid var(--color-border)"
      : "none"};
  border-radius: 6px;
  background: ${({ color }) => (color ? color : "var(--color-primary)")};
  font-size: 16px;
  color: ${({ color }) =>
    color === "var(--color-white)"
      ? "var(--color-secondary)"
      : "var(--color-white)"};
`;
