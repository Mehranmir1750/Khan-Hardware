import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import "../styles/Edit.css"

export default function Edit() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    getTransaction();
  }, []);

  const getTransaction = async () => {
    try {

      const response = await axios.get(
        `http://localhost:5000/api/transaction/${id}`
      );

      const t = response.data;
      setType(t.type);
      setItem(t.item || "");
      setQuantity(t.quantity || "");
      setUnit(t.unit || "");
      setPrice(t.price || "");
      setAmount(t.amount || "");

    } catch (err) {
      console.error(err);
    }
  };

  // Auto-calculate amount when quantity or price changes
  useEffect(() => {
    if (type === "Purchase") {
      const calculated = (Number(quantity) || 0) * (Number(price) || 0);
      setAmount(calculated);
    }
  }, [quantity, price]);

  const updateTransaction = async (e) => {
    e.preventDefault();

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/transaction/${id}`,
        type === "Purchase"
          ? { item, quantity, unit, price, amount }
          : { amount },
          {
        headers: {
  Authorization: `Bearer ${localStorage.getItem("token")}`
}
      }
      );

      alert("Transaction Updated Successfully");
      navigate("/Transactions");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="edit-container">

        <h2>Edit Transaction</h2>

        <form onSubmit={updateTransaction}>

          {type === "Purchase" && (
            <>
              <div>
                <label>Item</label>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </div>

              <div>
                <label>Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div>
                <label>Unit</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value="kg">Kg</option>
                  <option value="L">Liter</option>
                  <option value="ft">Feet</option>
                  <option value="m">Meter</option>
                  <option value="pcs">Pieces</option>
                  <option value="bag">Bag</option>
                </select>
              </div>

              <div>
                <label>Price / Unit</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div>
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  readOnly
                />
              </div>
            </>
          )}

          {type === "Payment" && (
            <div>
              <label>Amount Paid</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          )}

          <button type="submit">
            Update Transaction
          </button>

        </form>

      </div>
    </>
  );
}