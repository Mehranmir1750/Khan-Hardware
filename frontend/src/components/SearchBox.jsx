import "../styles/SearchBox.css"

export default function SearchBox({
    search,
    setSearch,
    handleSearch,
})
{

    return(
        <>
         <div className="search-card">
        <h1 className="user_home_heading">Check Your Balance</h1>

        <p className="user_search_heading">Enter your phone number or name to view your account details</p>
   

    <input
    type="text"
    placeholder="Phone Number or Name"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />


    <button 
    className="record_button"
    onClick={handleSearch}
    >Search Record</button>
     </div>
    
    </>
    )


   
    
    

}