import styled from "@emotion/styled";
import React, { useState } from "react";
import DisplayItem from "./displayItem";
import EditItem from "./editItem";

const todos = ({ id, text }: { id: number; text: string }) => {
  const [edit, setEdit] = useState(false);
  function editHelper(x: boolean) {
    setEdit(x);
  }
  return (
    <>
      {edit && <EditItem id={id} useSetEdit={editHelper}></EditItem>}
      {!edit && (
        <DisplayItem id={id} text={text} useSetEdit={editHelper}></DisplayItem>
      )}
    </>
  );
};

export default todos;
