import { useEffect, useState } from "react";
import { getExpenses, addExpense, deleteExpense } from "./api";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  
  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  const handleAdd = async () => {
    if (!title || !amount || !date) return;

    await addExpense({
      title,
      amount: Number(amount),
      date,
    });

    setTitle("");
    setAmount("");
    setDate("");

  
    loadExpenses();
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#000000",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h1>Expense Tracker</h1>
      <h2>Total: ₹{total}</h2>

      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "90%", padding: "10px", marginTop: "10px" }}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: "90%", padding: "10px", marginTop: "10px" }}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ width: "90%", padding: "10px", marginTop: "10px" }}
      />

      <button
        onClick={handleAdd}
        style={{
          width: "30%",
          padding: "12px",
          marginTop: "15px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add Expense
      </button>

      <ul style={{ marginTop: "30px", paddingLeft: "0" }}>
        {expenses.map((exp) => (
          <li
            key={exp.id}
            style={{
              listStyle: "none",
              marginBottom: "12px",
              padding: "12px",
              background: "#313234",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #e0e0e0",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <strong>{exp.title}</strong>
              <br />
              <span style={{ fontSize: "12px", color: "#777" }}>
                {exp.date}
              </span>
            </div>

            <div>
              ₹{exp.amount}
              <button
                onClick={() => handleDelete(exp.id)}
                style={{
                  marginLeft: "15px",
                  background: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p
  style={{
    marginTop: "20px",
    fontSize: "12px",
    color: "#888",
    textAlign: "center",
  }}
>
  Keerthan Rao
</p>

    </div>
  );
}

export default App;
