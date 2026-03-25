import type { Todo } from "./interfaces/Todos.interfaces";
import style from "./style/TodoList.module.css";
import { TodoItem } from "./TodoItem";

interface IProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onSetTitle: (id: number, title: string) => void;
}

export const TodoList = ({ todos, onDelete, onSetTitle }: IProps) => {
  return (
    <div>
      <h3>Список</h3>
      <ul className={style.list}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              onDelete={onDelete}
              onSetTitle={onSetTitle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
