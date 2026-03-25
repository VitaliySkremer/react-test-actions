import { InputText } from "primereact/inputtext";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export const Filter = ({ value, onChange }: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h3>Фильтрация</h3>
      <InputText
        value={value}
        placeholder="Фильтрация"
        onChange={handleChange}
      />
    </div>
  );
};
