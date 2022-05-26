import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
`;

export const Items = styled.div<{ active?: boolean }>`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: ${({ active }) =>
    active ? "var(--color-white)" : "var(--color-black)"};
  background: ${({ active }) =>
    active ? "var(--color-secondary)" : "var(--color-white)"};
  border-radius: ${({ active }) => (active ? "8px" : "0px")};

  span {
    display: flex;
    align-items: flex-start;
    svg {
      font-size: 20px;
    }
  }
`;
