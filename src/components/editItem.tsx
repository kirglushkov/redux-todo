import styled from "@emotion/styled";
import React, { MutableRefObject, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../App";
import { editTask } from "../features/TaskSlice";
import { StyledInput } from "./addItem";
import { StyledButton } from "./displayItem";

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
              dispatch(editTask({ id: id, text: inputValue.current.value }));
              useSetEdit(false);
            }
          }
        }}
      ></StyledInput>
      <StyledButton
        onClick={() => {
          dispatch(editTask({ id: id, text: inputValue.current.value }));
          useSetEdit(false);
        }}
      >
        изменить
      </StyledButton>
    </Item>
  );
};

export default editItem;
