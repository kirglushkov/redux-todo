import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/TaskSlice";

type Props = {};

const Item = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledButton = styled.button`
  padding: 3px 6px;
  background-color: #8bbabb;
  border-color: #8bbabb;
  color: white;
  border-radius: 5px;
  border-width: 1px;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #6b9b9b;
    border-color: #6b9b9b;
  }
  ${(props: { red?: boolean }) =>
    props.red &&
    `
    background-color: #b76b6b;
    border-color: #b76b6b;
      &:hover {
        background-color: #9b6b6b;
        border-color: #9b6b6b;
  }
    `}
`;

const displayItem = ({
  id,
  text,
  useSetEdit,
}: {
  id: number;
  text: string;
  useSetEdit: (x: boolean) => void;
}) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>{id + 1}.</span>
      <span>{text}</span>
      <StyledButton
        onClick={() => {
          useSetEdit(true);
        }}
      >
        изменить
      </StyledButton>
      <StyledButton
        red
        onClick={() => {
          dispatch(deleteTask(id));
        }}
      >
        удалить
      </StyledButton>
    </Item>
  );
};

export default displayItem;
