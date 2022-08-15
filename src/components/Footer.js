const Footer = () => {
  return (
    <div className=" p-4 d-flex flex-wrap justify-content-evenly text-decoration-none footer card-footer">
      <div className="footerLogo">
        <img src="https://i.imgur.com/D39K5wu.jpeg" alt="" />
        <p className="my-4">
          C-403, NIRVANA COURTYARD, NIRVANA COUNTRY, GURGAON, 122018
        </p>
      </div>
      <div>
        {/* <h3>icube</h3> */}
        <ul style={{ listStyle: "none" }}>
          <a href="/">
            <li>Terms & Conditions</li>
          </a>
          <a href="/">
            <li>Privacy</li>
          </a>
        </ul>
      </div>
      <div >
        <h2 className="text-decoration-underline">Contact:</h2>
        <p className="flex-wrap">Mr. Manish Kothary</p>
        <p className="flex-wrap">Phone No: +919205477715, +16463673725 </p>
        <p className="flex-wrap">Email: manish@icube.design</p>
      </div>
    </div>
  );
};

export default Footer;
