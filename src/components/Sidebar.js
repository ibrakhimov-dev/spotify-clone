
function Sidebar () {
    return (
        <section className="sidebar" >
            <div className="sidebar-header">
                <button type="button" className="home-btn"><i class="fa-solid fa-house"></i> Home</button>
                <button type="button" className="search-btn"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
            </div>
            <div className="sidebar-main">
                <button type="button" className="library-btn"><i class="fa-solid fa-book"></i> Your Library</button>
            </div>
        </section>
    );
}

export default Sidebar;