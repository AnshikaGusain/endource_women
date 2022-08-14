const Footer = () => {
    return (
        <div className=" p-4 d-flex justify-content-evenly text-decoration-none footer">
                <div className="footerLogo">
                            <img src="https://i.imgur.com/D39K5wu.jpeg" alt="" />
                        </div>
            <div>
                {/* <h3>icube</h3> */}
                <ul style={{listStyle:"none",fontSize:"0.75em"}}>
                    <a href="/"><li>Edits</li></a>
                    <a href="/"><li>Jobs</li></a>
                    <a href="/"><li>Terms & Conditions</li></a>
                    <a href="/"><li>Privacy</li></a>
                    <a href="/"><li>Affiliate Disclosure</li></a>     
                </ul>
            </div>
            <div >
                <h3>Customer Service</h3>
                <ul style={{listStyle:"none",fontSize:"0.75em" }}>
                    <a href="/"><li>FAQs</li></a>
                    <a href="/"><li>Contact Us</li></a> 
                </ul>
            </div>
        </div>
    );
}

export default Footer;