const Footer = () => {
  return (
    <div className=" p-4 d-flex justify-content-evenly text-decoration-none footer">
      <div className="footerLogo">
        <img src="https://i.imgur.com/D39K5wu.jpeg" alt="" />
        <p className="flex-wrap my-4">
          C-403, NIRVANA COURTYARD, NIRVANA COUNTRY, GURGAON, 122018
        </p>
      </div>
      <div>
        {/* <h3>icube</h3> */}
        <ul style={{ listStyle: "none" }}>
          <a href="/">
            <li>Edits</li>
          </a>
          <a href="/">
            <li>Jobs</li>
          </a>
          <a href="/">
            <li>Terms & Conditions</li>
          </a>
          <a href="/">
            <li>Privacy</li>
          </a>
          <a href="/">
            <li>Affiliate Disclosure</li>
          </a>
        </ul>
      </div>
      <div style={{ width: "16rem", height: "auto" }}>
        <h3>Contact:</h3>
        <p className="flex-wrap">Mr. Manish Kothary</p>
        <p className="flex-wrap">Phone No: +919205477715, +16463673725 </p>
        <p className="flex-wrap">Email: manish@icube.design</p>
      </div>
    </div>
  );
};

export default Footer;
