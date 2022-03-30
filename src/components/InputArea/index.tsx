import { useEffect, useState } from 'react';
import { formatDate, reverseDate, strToDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const MAXVALUE = Math.pow(10, 9);
    const [date, setDate] = useState<Date>(Object);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        const checkInputs = () => {
            setDisabled(date === Object() || category === '' || title === '' || value === 0 || isNaN(value));
        }

        checkInputs();
    }, [category, date, title, value])

    const handleAddEvent = () => {
        if(date === Object() || category === '' || title === '' || value === 0) return;

        let newItem: Item = {
            date: date,
            category: category,
            title: title,
            value: value
        };

        onAdd(newItem);

        setDate(Object);
        setCategory('');
        setTitle('');
        setValue(0);
    }

    const handleDateChange = (newDate: string) => {
        setDate(strToDate(newDate));
    }

    const handleCategory = (cat: string) => {
        setCategory(cat);
    }

    return(
        <C.Container>
            <C.InputArea>
                <h3>Data</h3>

                <input
                    type='date'
                    onChange={(e) => handleDateChange(e.target.value)}
                    min={'2021-12-01'}
                    max={reverseDate(formatDate(new Date()))}
                    required
                />
            </C.InputArea>

            <C.SelectArea>
                <h3>Categoria</h3>

                <select name='select' value={category} onChange={(e) => handleCategory(e.target.value)} required>
                    <option
                        value={0}
                        style={{
                            display: 'none',
                            visibility: 'hidden',
                            paddingRight: '10px'
                        }}
                    >
                        Categoria
                    </option>
                    <option value='food' >Alimentação</option>
                    <option value='rent' >Renda</option>
                    <option value='salary' >Salário</option>
                    <option value='entertainment' >Entretenimento</option>
                    <option value='extra' >Extra</option>
                    <option value='debt' >Dívida</option>
                    <option value='bribery' >Suborno</option>
                    <option value='loan' >Empréstimo</option>
                </select>
            </C.SelectArea>

            <C.InputArea>
                <h3>Título</h3>

                <input type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </C.InputArea>
            
            <C.InputArea>
                <h3>Valor</h3>

                <input type='number'
                    min={0}
                    max={MAXVALUE}
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    required
                />
            </C.InputArea>
            
            <C.ButtonArea disabled={disabled}>
                <button onClick={handleAddEvent} disabled={disabled}>
                    Adicionar
                </button>
            </C.ButtonArea>
        </C.Container>
    )
}
