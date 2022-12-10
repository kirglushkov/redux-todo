import CustomButton from "./customButton";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { MutableRefObject, useRef, useState } from "react";
import { addTask } from "../features/TaskSlice";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 5px;
  border-radius: 10px;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  width: 50%;
  border: none;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  display: flex;
  flex: 1;
  width: 100%;
  height: auto;
  border: none;
  border-radius: 10px;
  outline: none;
  color: black;
  background-color: white;
  font-family: monospace;
  padding: 5px;

  &::placeholder {
    color: #bfbfbf;
  }

  ${(props: { add?: boolean }) =>
    props.add &&
    `
    font-size: 20px;
    `}
`;

type InputProps = {
  current: {
    value: string;
  };
};

function AddItem() {
  const inputValue = useRef() as MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();
  return (
    <Root>
      <StyledInput
        add
        type="text"
        ref={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (
              inputValue.current.value != null &&
              inputValue.current.value != ""
            ) {
              dispatch(addTask(inputValue.current.value));
            }
          }
        }}
      />
      <CustomButton
        width={35}
        onclick={() => {
          if (
            inputValue.current.value != null &&
            inputValue.current.value != ""
          ) {
            dispatch(addTask(inputValue.current.value));
            inputValue.current.value = "";
          }
        }}
      >
        +
      </CustomButton>
    </Root>
  );
}

export default AddItem;
