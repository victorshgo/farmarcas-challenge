import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 10px;
`;

export const TableHeaders = styled.th`
  padding: 15px;
  text-align: left;
  font-size: 14px;
  font-weight: 400;

  svg {
    cursor: pointer;
    padding-top: 5px;
  }
`;

export const TableCells = styled.td<{ color?: string }>`
  padding: 25px 15px;
  color: ${({ color }) => (color ? color : "var(--color-black)")};
  background: var(--color-white);
`;

export const TableRows = styled.tr`
  td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  span.email {
    color: var(--color-secondary);
    font-size: 12.5px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
