import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import BalanceCard from "../components/BalanceCard";
import { useNavigate } from "react-router-dom";
import Details from "../components/Details";


export default function Home() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState(null);

  const handleSearch = () => {

    if (!search.trim()) {
      alert("Enter phone number or name");
      return;
    }

  
    setCustomer({
      name: "Abdul Rahman",
      phone: "9541771220",
      balance: 12500,
    });


    console.log(search);
  };

     const onViewDetails = () =>{
      navigate("/details")

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
        onViewDetails={onViewDetails}
      />

      )}

      
    </>
  );
}