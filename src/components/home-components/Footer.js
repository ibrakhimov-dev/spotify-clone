
function Footer() {
    const date = new Date()
    return (
        <footer>
            <section className="contact">
                <div className="contact-content">
                    <div className="company">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#1">About</a></li>
                            <li><a href="#2">Jobs</a></li>
                            <li><a href="#3">For the Record</a></li>
                        </ul>
                    </div>
                    <div className="communities">
                        <h4>Communities</h4>
                        <ul>
                            <li><a href="#4">For Artists</a></li>
                            <li><a href="#5">Developers</a></li>
                            <li><a href="#6">Advertising</a></li>
                            <li><a href="#7">Investors</a></li>
                            <li><a href="#8">Vendors</a></li>
                            <li><a href="#9">Spotify for Work</a></li>
                        </ul>
                    </div>
                    <div className="useful">
                        <h4>Useful links</h4>
                        <ul>
                            <li><a href="#10">Support</a></li>
                            <li><a href="#11">Free Mobile App</a></li>
                        </ul>
                    </div>
                    <div className="icon-content">
                        <button type="button" className="footer-icon">
                            <i class="fa-brands fa-instagram"></i>
                        </button>
                        <button type="button" className="footer-icon">
                            <i class="fa-brands fa-twitter"></i>
                        </button>
                        <button type="button" className="footer-icon">
                            <i class="fa-brands fa-facebook"></i>
                        </button>
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="footer-content">
                    <div className="footer-list">
                        <ul>
                            <li><a href="#12">Legal</a></li>
                            <li><a href="#13">Privacy Center</a></li>
                            <li><a href="#14">Privacy Policy</a></li>
                            <li><a href="#15">Cookies</a></li>
                            <li><a href="#16">About Ads</a></li>
                            <li><a href="#17">Accessibility</a></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h4>&copy; {date.getFullYear()} Spotify AB</h4>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;