import { Item } from "../../types/Item";
import * as C from "./styles";
type Props = {
  onAdd: (item: Item) => void;
};
export const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {};
  return (
    <C.Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
