import "./App.css";
import AddItem from "./components/addItem";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

interface IRootState {
  addTask: {
    todos: Todo[];
  };
}

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  color?: string;
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

function App() {
  const Value = useSelector((state: IRootState) => state.addTask);
  console.log(Value.todos);
  const Array: Todo[] = Value.todos;
  const Todos = Array.map((item) => {
    return (
      <div>
        <span>{item.id + 1}. </span>
        <span>{item.text}</span>
      </div>
    );
  });
  return (
    <Root>
      <Header>Simple Redux TODO list</Header>
      <AddItem></AddItem>
      {Todos}
    </Root>
  );
}

export default App;
