import "./App.css";
import AddItem from "./components/addItem";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Todos from "./components/todos";

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

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const Value = useSelector((state: IRootState) => state.addTask);
  const Array: Todo[] = Value.todos;
  return (
    <Root>
      <Header>Simple Redux TODO list</Header>
      <AddItem></AddItem>
      {Array.map((item) => {
        return (
          <Item>
            <Todos id={item.id} text={item.text} />
          </Item>
        );
      })}
    </Root>
  );
}

export default App;
