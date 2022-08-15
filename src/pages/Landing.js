import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className="my-3">
        <img
          src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="cont">
      <div className="container my-4" style={{ width: "50rem" }}>
        <h1>What is icube all about?</h1>
        <h4 className="text-muted my-5">
          iCube started in 2016 as a design led manufacturing company founded by
          a group with over 60 years of collective experience working across
          several Export organizations in India and producing for leading global
          brands like Tommy Hilfiger, GAP, Zara, and Nordstrom. We have grown in
          strength today with our state-of-the-art production facilities
          supplying to internationally renowned labels.
        </h4>
      </div>
      </div>
      <div className="container text-center">
        <div className="row g-2 my-3">
          <div className="col-6">
            <div className="container my-4 jam">
                <Link to="/Women">
              <h1>Women Wear</h1>
              </Link>
              <h2 className="text-muted">
                Driven by the latest fashion trends. iCube produces all types of
                upscale ladies' wear, focusing on customer requirements and
                tastes. Our ladies collection is a combination of the finest
                fabrics and the most elegant designs keeping in mind,
                wearability, and style.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <img
              src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
            />
          </div>
          <div className="col-6">
            <img
              src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="..."
            />
          </div>
          <div className="col-6">
            <div className="container my-4 jam">
                <Link to="/Kids">
              <h1>Kids Wear</h1>
              </Link>
              <h2 className="text-muted">
                With our brand A Little Fable, we’re committed to making
                garments and accessories meticulously designed in colorful
                themes that help us create giggles, laughs, somersaults, and
                stories one after the other… We manufacture the full range of
                unique girls' dresses and boy’s partywear along with
                accessories, gifts, nightwear, and lots more.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div className="container my-4 jam">
                <Link to="/Home">
              <h1>Home Furnishings</h1>
              </Link>
              <h2 className="text-muted">
                iCube's expertise in home furnishings includes hand made
                embroidery, and appliqué work. Our core competency lies in the
                intricacy of designs, the perfection of the yarn, and the
                assurance of quality and durability of our products.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <img
              src="https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VzaGlvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="..."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
