import { useState } from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";
type Props = {
  onAdd: (item: Item) => void;
};
export const InputArea = ({ onAdd }: Props) => {
  const [category, setCategory] = useState("");
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2023, 3, 19),
      category: "food",
      title: "item de teste",
      value: 20.24,
    };
    onAdd(newItem);
  };
  return (
    <C.Container>
      <input></input>
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
