import { useState, useEffect } from 'react';

import * as C from './styles';

import { Item } from './types/Item';
import { categories } from './data/categories';

import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import api from './api/api';
import { AlertError, AlertSuccess } from './helpers/alert';

function App() {
  const [list, setList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    api.loadItems(setList);
  }, [list]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense)
        expenseCount += filteredList[i].value;

      else incomeCount += filteredList[i].value;
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
    api.addItem(item).then((s) => AlertSuccess({
      title: 'Transação adicionada',
      description: `Transação '${item.title}' com o valor de '${item.value} kz'`
    })).catch((e) => AlertError({
      title: 'Erro inesperado',
      description: 'A transação não foi adicionada'
    }))
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          <h1>
            H-Finances
            <span>H-Finances</span>
            <span>H-Finances</span>
            <span>Developed by HELIOPC</span>
          </h1>
        </C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          month={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
