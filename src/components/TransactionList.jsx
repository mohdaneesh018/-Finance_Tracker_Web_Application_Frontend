import React, { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const TransactionList = ({ filters }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTransactions = async () => {
    try {
      const res = await API.get(
        `/transactions?type=${filters.type}&sort=${filters.sort}&minAmount=${filters.minAmount}&maxAmount=${filters.maxAmount}&startDate=${filters.startDate}&endDate=${filters.endDate}&page=${page}`
      );

      setTransactions(res.data.transactions);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [filters, page]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>

      <div className="space-y-4">
        {transactions.length > 0 ? (
          transactions.map((item) => (
            <div
              key={item._id}
              className="flex justify-between border p-4 rounded-lg"
            >
              <div>
                <p className="font-semibold">{item.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>

              <span
                className={`font-bold ${item.type === "Income"
                  ? "text-green-600"
                  : "text-red-600"
                  }`}
              >
                {item.type === "Income" ? "+" : "-"} ₹{item.amount}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No Transactions Found</p>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="font-semibold">
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionList; 