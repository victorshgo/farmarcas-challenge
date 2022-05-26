import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: var(--color-tertiary);
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 85%;
  height: 100%;
  margin-left: 10px;
`;
