import { Item } from "../../types/Item";
import * as C from "./style";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  console.log({ list });
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Titulo</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={index}>
              <td></td>
              <td>tete</td>
              <td>{item?.title}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </C.Table>
  );
};
