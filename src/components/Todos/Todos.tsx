import { Skeleton } from "primereact/skeleton";
import { useEffect, useMemo, useState } from "react";
import { Filter } from "../Filter/Filter";
import { TodoList } from "./TodoList";
import type { Todo } from "./interfaces/Todos.interfaces";
import style from "./style/Todo.module.css";

export const Todos = () => {
  const [filter, setFilter] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoIsLoading, setTodoIsLoading] = useState(false);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [todos, filter]);

  const onChangeFilter = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {
    async function fetchData() {
      setTodoIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();

        setTodos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setTodoIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const deleteTodo = (id: number) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const setNewTitle = (id: number, title: string) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title
          };
        }
        return todo;
      })
    );
  };

  const skeletonLoading = Array.from({ length: 10 }).map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className={style.container}>
      <Filter
        value={filter}
        onChange={onChangeFilter}
      />
      {todoIsLoading ? (
        skeletonLoading
      ) : filteredTodos.length > 0 ? (
        <TodoList
          todos={filteredTodos}
          onDelete={deleteTodo}
          onSetTitle={setNewTitle}
        />
      ) : (
        "Ничего не найдено"
      )}
    </div>
  );
};
