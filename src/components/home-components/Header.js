
function Header () {
    return (
        <div className="header-content">
            <a href="#">
                <button type="button" className="explore">
                    Explore Premium
                </button>
            </a>
            <a href="#">
                <button type="button" className="install">
                    <i class="fa-regular fa-circle-down fa-fade"></i> Install App
                </button>
            </a>
            <a href="#">
                <button type="button" className="profile">
                    <i class="fa-solid fa-user"></i>
                </button>
            </a>
        </div>
    )
}

export default Header;