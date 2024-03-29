export const waait = () => new Promise( res => setTimeout(res, Math.random() * 2000)) 


const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
  }
  

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

// create budget
export const createBudget = ({
    name, amount
  }) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: Date.now(),
      amount: +amount,
      color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
  }

export const deleteItem = ({key}) => {
    return localStorage.removeItem(key);
}