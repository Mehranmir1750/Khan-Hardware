import "../styles/BalanceCard.css";

export default function BalanceCard({
    customer,
    onViewDetails
}){
    return(
        <>


        <div className="balance-card">

            <h2>{customer.name}</h2>

            <p>{customer.phone}</p>

            
            <div className={`balance-box ${customer.balance >= 0 ? "due" : "advance"}`}>
  {customer.balance >= 0 ? (
    <>
      <h4>Amount Due</h4>
      <p>₹ {customer.balance}</p>
    </>
  ) : (
    <>
      <h4>Advance Balance</h4>
      <p>₹ {Math.abs(customer.balance)}</p>
    </>
  )}
</div>

            <button 
            className="details-btn"
            onClick={onViewDetails}
            >
                View Details
            </button>


        </div>
        
        
        </>
    )
}