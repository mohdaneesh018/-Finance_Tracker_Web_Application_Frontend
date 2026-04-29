import React, { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    type: "Income",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/transactions", formData);

      toast.success("Transaction Added");

      setFormData({
        type: "Income",
        description: "",
        amount: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-4">
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option>Income</option>
          <option>Expense</option>
        </select>

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <button className="bg-green-600 text-white rounded-lg hover:bg-green-700">
          Add
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;