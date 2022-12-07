import styled from "@emotion/styled";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const [inputValue, setInputValue] = useState("");
  return (
    <Item>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={(e) => {
          if (e.target.value.length < 50) {
            setInputValue(e.target.value);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (inputValue != null && inputValue != "") {
              dispatch(editTask({ id: id, text: inputValue }));
              useSetEdit(false);
            }
          }
        }}
      ></StyledInput>
      <StyledButton
        onClick={() => {
          dispatch(editTask({ id: id, text: inputValue }));
          useSetEdit(false);
        }}
      >
        изменить
      </StyledButton>
    </Item>
  );
};

export default editItem;
