import styled from "styled-components";

export const FormItems = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label<{ color?: string }>`
  height: 17px;
  margin: 5px;
  font-size: 15px;
  color: ${({ color }) => (color ? color : "var(--color-secondary)")};
`;

export const LabelContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input<{
  error: boolean;
}>`
  ${({ error }) =>
    error &&
    `
        border: 1px solid var(--color-red) !important;
  `}
`;
