import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import BalanceCard from "../components/BalanceCard";
import { useNavigate } from "react-router-dom";
// import Details from "../components/Details";
import Details from "./Details";
import axios from "axios";


export default function Home() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState(null);

  const handleSearch = async () => {

    if (!search.trim()) {
      alert("Enter phone number or name");
      return;
    }

    try {

  const response = await axios.get(
    `http://localhost:5000/api/customers/search/${search}`,
    {
        headers: {
  Authorization: `Bearer ${localStorage.getItem("token")}`
}
      }
  );

  console.log(response.data);

  setCustomer(response.data);

} catch (err) {

  alert("Customer not found");

  setCustomer(null);

}
  };

     const onViewDetails = () =>{
      navigate(`/details/${customer.id}`)

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