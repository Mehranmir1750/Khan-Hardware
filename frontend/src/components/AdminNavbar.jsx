export default function AdminNavbar(){
    return(
    <>

    <div className="left_navbar">
        <h4 className="adminlogo">KH</h4>

        <a href="/home" className="home">Home</a>
        <a href="/users" className="users">Users</a>
        <a href="/logout" className="logout">Log out</a>
    </div>

<div className="top_navbar">
    <h3 className="admin_heading">
        Khan Hardware Admin
    </h3>

    <input
        className="admin_search"
        type="text"
        placeholder="Search number or name"
    />
</div>
    </>
    )
}