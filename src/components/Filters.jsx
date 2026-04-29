import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <select
          value={filters.type}
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
          className="border p-3 rounded-lg"
        >
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <select
          value={filters.sort}
          onChange={(e) =>
            setFilters({ ...filters, sort: e.target.value })
          }
          className="border p-3 rounded-lg"
        >
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
          <option value="type">Type</option>
        </select>

        <input
          type="number"
          placeholder="Min Amount"
          value={filters.minAmount}
          onChange={(e) =>
            setFilters({ ...filters, minAmount: e.target.value })
          }
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          placeholder="Max Amount"
          value={filters.maxAmount}
          onChange={(e) =>
            setFilters({ ...filters, maxAmount: e.target.value })
          }
          className="border p-3 rounded-lg"
        />

        <input
          type="date"
          value={filters.startDate}
          onChange={(e) =>
            setFilters({ ...filters, startDate: e.target.value })
          }
          className="border p-3 rounded-lg"
        />

        <input
          type="date"
          value={filters.endDate}
          onChange={(e) =>
            setFilters({ ...filters, endDate: e.target.value })
          }
          className="border p-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Filters;