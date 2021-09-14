import { useContext } from "react";
import { Todo } from "../interfaces/interfaces";
import { TodoContext } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo } = useContext(TodoContext);
  const handleDoubleClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onClick={handleDoubleClick}
    >
      {todo.desc}
    </li>
  );
};
