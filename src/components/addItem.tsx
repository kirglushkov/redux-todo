import CustomButton from "./customButton";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { useState } from "react";
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

const StyledInput = styled.input`
  display: flex;
  flex: 1;
  width: 100%;

  border: none;
  border-radius: 10px;
  outline: none;
  color: black;
  background-color: white;
  font-family: monospace;
  font-size: 20px;
  padding: 5px;
`;

function AddItem() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <Root>
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
              dispatch(addTask(inputValue));
            }
          }
        }}
      />
      <CustomButton
        width={35}
        onclick={() => {
          if (inputValue != null && inputValue != "") {
            dispatch(addTask(inputValue));
          }
        }}
      >
        +
      </CustomButton>
    </Root>
  );
}

export default AddItem;
