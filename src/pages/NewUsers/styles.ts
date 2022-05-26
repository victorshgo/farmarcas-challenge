import styled from "styled-components";

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormContent = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 25px 15px;
  border-radius: 8px;
  background: var(--color-white);

  form {
    display: flex;
    flex-direction: row;
    div {
      width: 100%;
    }
    div:first-child {
      margin-right: 20px;
    }
  }
`;
