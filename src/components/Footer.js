const Footer = () => {
    return (
        <div className=" p-4 d-flex flex-wrap justify-content-around text-decoration-none footer text-white ">
            <div >
                <h3>endource</h3>
                <p style={{fontSize:"0.75em"}}>Vox Studios, 1-45 Durham Street, London SE11 5JH</p>
            </div>
            <div>
                <h3>Endource</h3>
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
                <ul style={{listStyle:"none",fontSize:"0.75em"}}>
                    <a href="/"><li>FAQs</li></a>
                    <a href="/"><li>Contact Us</li></a> 
                </ul>
            </div>
        </div>
    );
}

export default Footer;