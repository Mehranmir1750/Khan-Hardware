import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import BalanceCard from "../components/BalanceCard";


export default function Home() {

  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState(null);

  const handleSearch = () => {

    if (!search.trim()) {
      alert("Enter phone number or name");
      return;
    }

    // Dummy data for now
    setCustomer({
      name: "Abdul Rashid",
      phone: "9541771220",
      balance: 12500,
    });

    console.log(search);
  };

  return (
    <>
      <Navbar />

      <SearchBox
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {customer && (
        <BalanceCard
        customer={customer}
         onViewDetails={() => console.log("View Details")}
      />

      )}
    </>
  );
}