import { formatMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

type Props = {
    month: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ month, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        let [year, currentMonth] = month.split('-');
        let currentDate = new Date(parseInt(year), parseInt(currentMonth) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, currentMonth] = month.split('-');
        let currentDate = new Date(parseInt(year), parseInt(currentMonth) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatMonth(month)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income} />
                <ResumeItem title='Despesas' value={expense} />
                <ResumeItem
                    title='Lucros'
                    value={income - expense}
                    color={(income - expense) < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    )
}