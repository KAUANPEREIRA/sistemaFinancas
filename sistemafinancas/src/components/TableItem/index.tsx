import { Item } from "../../types/Item";
import * as C from "./style";
type Props = {
  item: Item;
};
export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>...</C.TableColumn>
      <C.TableColumn>{item?.category}</C.TableColumn>
      <C.TableColumn>{item?.title}</C.TableColumn>
    </C.TableLine>
  );
};
