import "./App.css";
import AddItem from "./components/addItem";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import Todos from "./components/todos";
import { useState, useEffect } from "react";
import { fetchTodos } from "./features/TaskSlice";

export interface IRootState {
  addTask: {
    todos: Todo[];
    status: string;
    error: any;
  };
}

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: monospace;
  font-size: 20px;
`;

const Header = styled.header`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Column = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const dispatch = useDispatch();
  const Value = useSelector((state: IRootState) => state.addTask);
  const Array: Todo[] = Value.todos;

  console.log(Array)

  useEffect(() => {
    if (Value.status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [Value.status, dispatch]);

  if (Value.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (Value.status === 'failed') {
    return <div>Error: {Value.error}</div>;
  }

  return (
    <Root>
      <Header>TODO list</Header>
      <AddItem></AddItem>
      <Column>
        {Array.map((item) => {
          return <Todos id={item.id} text={item.text} completed={item.completed} />;
        })}
      </Column>
    </Root>
  );
}

export default App;
