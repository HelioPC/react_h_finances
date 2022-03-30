import { Category } from "../types/Category"

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    entertainment: { title: 'Diversão', color: 'yellow', expense: true },
    extra: { title: 'Extra', color: '#0B6', expense: false },
    debt: { title: 'Dívida', color: '#1C1', expense: false },
    bribery: { title: 'Suborno', color: '#F00', expense: true },
    loan: { title: 'Dívida', color: '#D50', expense: true },
}