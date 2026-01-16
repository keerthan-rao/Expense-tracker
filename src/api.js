const API_URL = "http://127.0.0.1:8000";

export const getExpenses = async () => {
  const res = await fetch(`${API_URL}/expenses`);
  return res.json();
};

export const addExpense = async (expense) => {
  await fetch(`${API_URL}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
};

export const deleteExpense = async (id) => {
  await fetch(`${API_URL}/expenses/${id}`, {
    method: "DELETE",
  });
};
