import styled from "@emotion/styled";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/TaskSlice";

type Props = {};

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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
      <input
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
      ></input>
      <button
        onClick={() => {
          dispatch(editTask({ id: id, text: inputValue }));
          useSetEdit(false);
        }}
      >
        изменить
      </button>
    </Item>
  );
};

export default editItem;
