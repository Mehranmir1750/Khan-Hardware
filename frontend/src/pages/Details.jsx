import Navbar from "../components/Navbar";
import "../styles/Details.css"

export default function Details() {

  const transactions = [
    {
      date: "12/05/2026",
      type: "purchase",
      item: "Iron Nails",
      quantity: 4,
      price: 300,
    },
    {
      date: "04/06/2026",
      type: "purchase",
      item: "Pipe",
      quantity: 2,
      price: 800,
    },
    {
      date: "08/06/2026",
      type: "payment",
      amount: 1000,
    },
    {
      date: "11/06/2026",
      type: "purchase",
      item: "Hammer",
      quantity: 1,
      price: 500,
    },
  ];

  const balance = transactions.reduce((sum, transaction) => {

    if (transaction.type === "purchase") {
      return sum + transaction.price * transaction.quantity;
    }

    return sum - transaction.amount;

  }, 0);

  return (
    <>
      <Navbar />

      <div className="detail_component">

        <h2 className="detail_heading">
          Customer Ledger
        </h2>

        <table className="details_table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>

            {transactions.map((transaction, index) => (

              <tr key={index}>

                <td>{transaction.date}</td>

                {transaction.type === "purchase" ? (
                  <>
                    <td>{transaction.item}</td>
                    <td>{transaction.quantity}</td>
                    <td>₹{transaction.price}</td>
                    <td>
                      ₹{transaction.quantity * transaction.price}
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <strong>Payment Received</strong>
                    </td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ color: "green" }}>
                      -₹{transaction.amount}
                    </td>
                  </>
                )}

              </tr>

            ))}

            <tr>
              <td colSpan="4">
                <strong>Outstanding Balance</strong>
              </td>

              <td>
                <strong>
                  ₹{balance}
                </strong>
              </td>
            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
}