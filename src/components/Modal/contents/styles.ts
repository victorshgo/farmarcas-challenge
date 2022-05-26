import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.div<{ color: string; background: string }>`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 45px;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
`;

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: var(--color-secondary);
`;

export const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;
