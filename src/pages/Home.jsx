import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";
import Filters from "../components/Filters";
import TransactionList from "../components/TransactionList";

const Home = () => {
  const [filters, setFilters] = useState({
    type: "All",
    sort: "",
    minAmount: "",
    maxAmount: "",
    startDate: "",
    endDate: "",
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-4">
        <TransactionForm />
        <Filters filters={filters} setFilters={setFilters} />
        <TransactionList filters={filters} />
      </div>
    </div>
  );
};

export default Home;