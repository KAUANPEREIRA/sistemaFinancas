import * as C from "./App.styles";

// import { Categorie } from "./types/Categorie";
// import {categories} from './data/categories'
import { useEffect, useState } from "react";
import { TableArea } from "./components/TableArea";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState(items);
  useEffect(() => {
    setList(items);
  }, [items]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  console.log({ items });

  console.log("lista filtrada", filteredList);
  console.log("list no app", list);

  // funcao que pega mes atual e gera nova lista
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  // parou em 1-16 na auala

  console.log({ list });
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* area de informacoes resta 59 min */}

        {/* area de inserção */}

        {/* tabela de itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
