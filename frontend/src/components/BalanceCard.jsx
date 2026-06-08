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

            <div className="balance-box">
                ₹ {customer.balance}

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