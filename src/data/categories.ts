import { Category } from "../types/Category"

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    entertainment: { title: 'Diversão', color: 'red', expense: true },
    extra: { title: 'Extra', color: '#0B6', expense: false }
}