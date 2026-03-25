import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Todo } from "../../components/Todos/interfaces/Todos.interfaces";

export const TodoPage = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        const data = await response.json();

        setTodo(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {!todo ? (
        "loading..."
      ) : (
        <div>
          <span>{todo.title}</span>
        </div>
      )}
    </div>
  );
};
