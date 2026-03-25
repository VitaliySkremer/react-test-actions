import classNames from "classnames";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import type { Todo } from "./interfaces/Todos.interfaces";
import {useNavigate} from "react-router";

interface IProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onSetTitle: (id: number, title: string) => void;
}

export const TodoItem = ({ todo, onDelete, onSetTitle }: IProps) => {
  let navigate = useNavigate();

  const [title, setTitle] = useState(() => todo.title);
  const [disabled, setDisabled] = useState(true);

  const onChangeTitle = () => {
    if (disabled) {
      setDisabled(false);
      return;
    }

    onSetTitle(todo.id, title);
    setDisabled(true);
  };

  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText
          disabled={disabled}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Price"
        />
        <Button
          icon={classNames({
            pi: true,
            "pi-pencil": disabled,
            "pi-check": !disabled
          })}
          className="p-button-warning"
          onClick={onChangeTitle}
        />
        <Button
          icon="pi pi-times"
          className="p-button-danger"
          onClick={() => onDelete(todo.id)}
        />
        <Button
          icon="pi pi-eye"
          className="p-button-success"
          onClick={() => navigate(`/${todo.id}`)}
        />
      </div>
    </div>
  );
};
