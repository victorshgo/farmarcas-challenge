import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit, FaTrashAlt, FaSort } from "react-icons/fa";

import Button from "../Button";
import Switch from "../Switch";
import Modal from "../Modal";
import Delete from "../Modal/contents/Delete";

import { UsersProps } from "types/users";

import { TableProps } from "./types";

import {
  Table as TableComponent,
  TableHeaders,
  TableRows,
  TableCells,
  Name,
  Buttons,
} from "./styles";

const Table = ({ headers, data }: TableProps) => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);
  const handleEdit = (el: UsersProps) => navigate(`/edit/${el.id}`);
  const handleDelete = (el: UsersProps) => {
    setIsOpen(true);
    setId(el.id);
  };

  return (
    <>
      <TableComponent>
        <thead>
          <TableRows>
            {headers &&
              headers.map((el, index) => (
                <TableHeaders key={index}>
                  {el && (
                    <>
                      {el}&nbsp;
                      <FaSort />
                    </>
                  )}
                </TableHeaders>
              ))}
          </TableRows>
        </thead>
        <tbody>
          {data &&
            data.map((el, index) => (
              <TableRows key={index}>
                <TableCells>{el.network}</TableCells>
                <TableCells>
                  <Name>
                    <span>{el.name}</span>
                    <span className="email">{el.email}</span>
                  </Name>
                </TableCells>
                <TableCells color="var(--color-secondary)">
                  {el.profile}
                </TableCells>
                <TableCells>
                  <Switch active={el.status} />
                </TableCells>
                <TableCells align="center">
                  <Buttons>
                    <Button
                      icon={<FaRegEdit />}
                      color="var(--color-white)"
                      onClick={() => handleEdit(el)}
                    />
                    <Button
                      icon={<FaTrashAlt />}
                      color="var(--color-white)"
                      onClick={() => handleDelete(el)}
                    />
                  </Buttons>
                </TableCells>
              </TableRows>
            ))}
        </tbody>
      </TableComponent>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Delete id={id} reload={true} handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default Table;
