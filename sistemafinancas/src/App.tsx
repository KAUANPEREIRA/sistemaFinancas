import * as C from "./App.styles";

// import { Categorie } from "./types/Categorie";
// import {categories} from './data/categories'
import { useEffect, useState } from "react";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
import { TableArea } from "./components/TableArea";
import { categories } from "./data/categories";
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
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  console.log({ items });

  console.log("lista filtrada", filteredList);
  console.log("list no app", list);

  // funcao que pega mes atual e gera nova lista
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expense += filteredList[i].value;
      } else {
        income += filteredList[i].value;
      }
    }

    setIncome(income);
    setExpense(expense);
  }, [filteredList]);
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    //faznedo uma copia e adicionando um novo item
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* area de informacoes resta 59 min */}
        <InfoArea
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />

        {/* area de inserção */}
        <InputArea onAdd={handleAddItem} />

        {/* tabela de itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
