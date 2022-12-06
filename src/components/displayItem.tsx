import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/TaskSlice";

type Props = {};

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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
      <span>{id + 1}</span>
      <span>{text}</span>
      <button
        onClick={() => {
          useSetEdit(true);
        }}
      >
        e
      </button>
      <button
        onClick={() => {
          dispatch(deleteTask(id));
        }}
      >
        -
      </button>
    </Item>
  );
};

export default displayItem;
