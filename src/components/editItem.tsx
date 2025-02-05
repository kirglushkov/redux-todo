import styled from "@emotion/styled";
import React, { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../App";

import { StyledInput } from "./addItem";
import { StyledButton } from "./displayItem";
import { updateTodo } from "../features/TaskSlice";

type Props = {};

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 0;
`;

const editItem = ({
  id,
  useSetEdit,
}: {
  id: number;
  useSetEdit: (x: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: IRootState) => state.addTask);
  const text = todos.find((item) => item.id === id)?.text;
  const inputValue = useRef() as MutableRefObject<HTMLInputElement>;
  return (
    <Item>
      <StyledInput
        type="text"
        ref={inputValue}
        defaultValue={text}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (
              inputValue.current.value != null &&
              inputValue.current.value != ""
            ) {
              dispatch(updateTodo({ completed: true }));
              useSetEdit(false);
            }
          }
        }}
      ></StyledInput>
      <StyledButton
        onClick={() => {
          dispatch(updateTodo({ completed: true }));
          useSetEdit(false);
        }}
      >
        изменить
      </StyledButton>
    </Item>
  );
};

export default editItem;
