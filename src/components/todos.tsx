import styled from "@emotion/styled";
import React, { useState } from "react";
import DisplayItem from "./displayItem";
import EditItem from "./editItem";

const todos = ({ id, text, completed }: { id: number; text: string; completed: boolean }) => {
  return (
        <DisplayItem id={id} text={text} completed={completed} ></DisplayItem>
  );
};

export default todos;
