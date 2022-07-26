const Footer = () => {
    return (
        <div className=" p-4 d-flex justify-content-around text-decoration-none footer text-white container-fluid">
            <div>
                <h3>endource</h3>
                <p>Vox Studios, 1-45 Durham Street, London SE11 5JH</p>
            </div>
            <div>
                <h3>Endource</h3>
                <ul style={{listStyle:"none"}}>
                    <a href="https://www.endource.com/inspiration"><li>Edits</li></a>
                    <a href="https://apply.workable.com/endource/"><li>Jobs</li></a>
                    <a href="https://www.endource.com/terms"><li>Terms & Conditions</li></a>
                    <a href="https://www.endource.com/privacy"><li>Privacy</li></a>
                    <a href="https://www.endource.com/affiliate"><li>Affiliate Disclosure</li></a>     
                </ul>
            </div>
            <div >
                <h3>Customer Service</h3>
                <ul style={{listStyle:"none"}}>
                    <a href="https://www.endource.com/faq"><li>FAQs</li></a>
                    <a href="https://www.endource.com/contact"><li>Contact Us</li></a> 
                </ul>
            </div>
        </div>
    );
}

export default Footer;