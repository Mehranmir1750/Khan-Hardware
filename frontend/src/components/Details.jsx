import Navbar from "./Navbar";



export default function Details(
    {detail}
){
    return (
        <>

        <div className="detail_component">
            <h2 className="detail_heading">Details</h2>
            <h6 className="item_details">{detail?.item}</h6>
            <h6 className="item_details">{detail?.quantity}</h6>
            <h6 className="item_details">{detail?.price}</h6>
        </div>
        
        
        
        
        </>
    )

}