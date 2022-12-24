import React from "react";
import { Link } from "react-router-dom";
import ShopCard from "./ShopCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SummerShop() {
  return (
    <>
    <Navbar/>
    {/* <Link to="/Women">
      <div className="container-fluid d-flex m-3">
        <img className="img-fluid"
          src="https://images.prismic.io/endource/e79e9b09-a003-406d-85a2-f3079e4c73e6_Title.jpg?auto=compress,format"
          alt="Not available"
          />
      </div>

      <div className="container m-3">
        <img className="img-fluid"
          src="https://images.prismic.io/endource/fe4fb383-8545-4b4d-83a8-1b441deb702d_header2.jpg?auto=compress,format"
          alt="Not available"
          />
      </div>
    </Link>
      <Link to="/products/trousers">
      <ShopCard
        img1="//cdn.endource.com/image/s3-ab9f25d95fa76a2c17190f4ec1d51388/feed-p/adidas-by-stella-mccartney-logo-print-recycled-polyester-shorts.jpg"
        title1=""
        img2="https://images.prismic.io/endource/9d5065fc-6d9c-4227-bcd5-4684f9a81d72_2_ninety_percent.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title2="Ninety percent"
        img3="//cdn.endource.com/image/s3-d805e1474c1ad70350ee4d5b1cb571bc/feed-p/cos-printed-shorts.jpg"
        title3=""
        link="products"
        category="trousers"
        />
      </Link>

      <Link to="/products/dresses">
      <div className="container">
        <img className="img-fluid"
          src="https://images.prismic.io/endource/94930389-0e29-4512-9608-4389ad7f45c1_olympus.jpg?auto=compress,format"
          alt="Not available"
          />
      </div>
      </Link>
      <Link to="/products/swimwear">
      <ShopCard className="img-fluid"
        img1="https://images.prismic.io/endource/c3b42b23-3056-455a-888a-84e39cbf4281_hunzag.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title1="Hunza G"
        img2="//cdn.endource.com/image/s3-ee8f0dbb96cbb95d8e8c9c9a53c0d7dc/feed-p/cos-open-back-printed-swimsuit.jpg"
        title2=""
        img3="https://images.prismic.io/endource/912ed0e2-4de5-4799-9b0c-867f68237c6b_others.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"    
        title3="& Other Stories"
        link="products"
        category="Swimwear"
        />
      </Link>
      <Link to="/products/dresses">
      <div className="container">
        <img className="img-fluid"
          src="https://images.prismic.io/endource/c448e050-0a59-4efe-9555-76658fe9a05c_dresses.jpg?auto=compress,format"
          alt="Not available"
          />
      </div>
      </Link>
      <Link to="/products/dresses">
      <ShopCard
        img1="https://images.prismic.io/endource/7b9c043e-7ab5-4041-b5d4-3745e20c620f_product1.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title1="Arket"
        img2="https://images.prismic.io/endource/b9f1b791-920e-408d-b7a1-f86113ad0d1e_product2.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title2="Faithfull The Brand"
        img3="https://images.prismic.io/endource/0510e710-3de9-4772-98b4-b2a1920d50af_product3.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"    
        title3="Mango"
        link="products"
        category="dresses"
        />
      </Link>


  <Link to="/handpicked/mini dresses">
<div className="container">
        <img className="img-fluid"
          src="https://images.prismic.io/endource/d82c64fc-b40b-45cc-bf16-ba13887fd13c_P_B.jpg?auto=compress,format"
          alt="Not available"
          />
      </div>
  </Link>
      <div className="container">
        <img className="img-fluid"
          src="https://images.prismic.io/endource/c1b0f4cc-f8b1-424e-afae-bbd0efa2d56d_Handpicked_minidresses.jpg?auto=compress,format"
          alt="Not available"
        />
      </div>
<Link to="/handpicked/mini dresses">
      <ShopCard
        img1="https://images.prismic.io/endource/6ca42d0e-fe99-430a-89b1-a05b009baf97_1_Hunza_G.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title1="Hunza G"
        img2="https://images.prismic.io/endource/50305299-6ef9-43c8-a61a-efb283277e53_2_Isa_boulder.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title2="Isa Boulder"
        img3="https://images.prismic.io/endource/9469b547-8a4c-475e-9a6e-2c5c4fcab0d0_3_mango.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title3="Mango"
        link="handpicked"
        category="mini dresses"
      />
  </Link>
      <Link to="/handpicked/mini dresses">
      <ShopCard
        img1="https://images.prismic.io/endource/b46dcb27-501d-487e-a1d2-692ff94aa37c_4_reformation.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title1="Reformation"
        img2="https://images.prismic.io/endource/76997416-d059-4ea1-b07e-a58347720308_5_sandro.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title2="Sandro"
        img3="https://images.prismic.io/endource/a3807a6d-69e9-46a2-b395-49ba0fcb0f0e_6_stories.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title3="& Other Stories"
        link="handpicked"
        category="mini dresses"
        />
      </Link>


      <div className="container">
        <img className="img-fluid"
          src="https://images.prismic.io/endource/48b153c6-032a-4d7c-8fd9-2ef7d8b75ccd_swimwear.jpg?auto=compress,format"
          alt="Not available"
        />
      </div>
      <Link to="/products/swimwear">
      <ShopCard
        img1="https://images.prismic.io/endource/9310b147-30f9-4fea-bebc-f6203c285882_swimwear1.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title1="Skin"
        img2="https://images.prismic.io/endource/b8a4f8a7-4648-4920-8592-cb81e9e0348e_swimwear2.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title2="Mara Hoffman"
        img3="https://images.prismic.io/endource/6b620526-b893-413f-9737-4ab16a10aa95_swimwear3.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title3="Weekday"
        category="Swimwear"
        link="products"
        />
      </Link>
      <Link to="/products/swimwear">
      <ShopCard
        img1="https://images.prismic.io/endource/6ab0dbeb-e69a-456c-9808-d983921624a0_swimwear4.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title1="Faithfull The Brand"
        img2="https://images.prismic.io/endource/e99ade49-3d4f-4f99-81e6-913c3751a746_swimwear5.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title2="Casa Raki"
        img3="https://images.prismic.io/endource/8c74f086-9227-4871-afbc-ba8c3df40afc_swimwear6.jpg?auto=compress,format&rect=0,0,400,400&w=400&h=400"
        title3="Mara Hoffman"
        category="Swimwear"
        link="products"
        />
      </Link>
      
<Footer/> */}
    </>
  );
}
