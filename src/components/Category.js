import React, { Component } from "react";
import Card from "./Card";

class Category extends Component {
    constructor(){
        super();
        this.state = {
            category: [
                { item: "Dresses", img: "https://cdn.endource.com/image/s3-d86df4506adcb0610ccbcebc5c81d723/feed-p/and-other-stories-dress.jpg" },
                { item: "Tops", img: "https://cdn.endource.com/image/s3-36cb9f324ab12e7c540ea934a9d9703c/feed-p/boden-halterneck-cut-out-crop-top.jpg" },
                { item: "Coats", img: "https://cdn.endource.com/image/s3-8c55128088851516e8bbb603f3eecdc1/feed-p/reiss-amalia-belted-blindseam-short-wool-coat.jpg" },
                { item: "Jackets", img: "https://cdn.endource.com/image/s3-f085f3c35c20b75a70150c9b4957afcd/feed-p/burberry-check-hooded-jacket.jpg" },
                { item: "Jumpsuits", img: "https://cdn.endource.com/image/s3-812b0c02e8e06469d5e39fed9bda555d/feed-p/and-other-stories-belted-corduroy-jumpsuit.jpg" },
                { item: "Skirts", img: "https://cdn.endource.com/image/s3-d70947287e572e3bf159dd455ca770a8/feed-p/scotch-and-soda-asymmetric-tiered-skirt.jpg" },
                { item: "Jeans", img: "https://cdn.endource.com/image/s3-fe12cdd7ae42a11a15cce3979847da3e/feed-p/ganni-iry-jeans.jpg" },
                { item: "Lingerie", img: "https://cdn.endource.com/image/s3-864a244680f9ad59c163ad4ab917222f/feed-p/hush-victoria-contrast-sports-bra.jpg" },
                { item: "Trousers", img: "https://cdn.endource.com/image/s3-15a86d96088fc8f75835f596defdc27f/feed-p/scotch-and-soda-trees-for-all-sweatpants.jpg" },
                { item: "Knitwear", img: "https://cdn.endource.com/image/s3-7ab2998ccd596853a1d9c6e19cb4febd/feed-p/and-other-stories-argyle-wool-knit-jumper.jpg" },
                { item: "Swimwear", img: "https://cdn.endource.com/image/s3-025399f3533dfd2f2e24fd7f53b898f6/feed-p/oceanus-callie-embellished-one-shoulder-bikini.jpg" }]
    
    
        }
    }
    render() {
        return (
            <div className="m-4 p-4 bg-secondary">
                <div><h4 className="text-white text-decoration-underline">Shop By Category</h4></div>
                <div style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {this.state.category.map((i, index) => {
                        return <div key={index}>
                            <Card title={i.item} img={i.img} key={index} onChange={this.props.onChange}/>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default Category;