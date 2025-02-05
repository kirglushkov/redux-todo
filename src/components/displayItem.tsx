import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/TaskSlice";

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
  completed
}: {
  id: number;
  text: string;
  completed: boolean
}) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>{id + 1}.</span>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      {!completed &&       <StyledButton
        onClick={() => {
          dispatch(updateTodo({ id: id, completed: true }));
        }}
      >
        complete
      </StyledButton>}

      <StyledButton
        red
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      >
        delete
      </StyledButton>
    </Item>
  );
};

export default displayItem;
