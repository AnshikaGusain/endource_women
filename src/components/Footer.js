const Footer = () => {
  return (
    <div className=" p-4 d-flex flex-wrap justify-content-around text-decoration-none footer card-footer">
      <div className="footerLogo">
        <img src="https://i.imgur.com/D39K5wu.jpeg" alt="" />
        <p className="my-4">
          C-403, NIRVANA COURTYARD, NIRVANA COUNTRY, GURGAON, 122018
        </p>
      </div>
      <div>
        <span>icube</span>
        <ul style={{ listStyle: "none"}}>
          <a href="/">
            <li>Terms & Conditions</li>
          </a>
          <a href="/">
            <li>Privacy</li>
          </a>
        </ul>
      </div>
      <div >
        <span>Costumer Service</span>
        <ul style={{ listStyle: "none"}}>
          <a href="/">
            <li>FAQs</li>
          </a>
          <a href="/">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
