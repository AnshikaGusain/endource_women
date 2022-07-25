import React,{Component} from "react";
import Card from "./Card";

const data=[
    {title:"Trousers",
    img:"https://cdn.endource.com/image/s3-6e9116cf-8b7c-4cf7-9663-dd0ef29620a6/detail/default.jpg",
    url:"https://www.endource.com/edit/handpicked-trousers-on-sale/YqBXFcnnfAABpEUz"},
    {
        title:"Mini Dresses",
        img:"//cdn.endource.com/image/s3-1abccf72-8459-4a2e-aa34-b4e5beeebfa6/detail/default.jpg",
        url:"https://www.endource.com/edit/handpicked-mini-dresses/YoN0YUzt_QAB---d"
    },
    {
        title:"Shorts",
        img:"https://cdn.endource.com/image/s3-705813ca-70d7-467b-bad9-8314b458ca64/detail/default.jpg",
        url:"https://www.endource.com/edit/handpicked-shorts/YoNW6snnfAABD7qe"
    },
    {
        title:"Colourful Dresses",
        img:"https://cdn.endource.com/image/s3-af3c1f5b78a2453f4c263de33fc4c733/feed-p/sandro-tie-dye-midi-dress.jpg",
        url:"https://www.endource.com/edit/handpicked-colourful-dresses/YoMx4MnnfAABD7k8"
    },
    {
        title:"Swimwear",
        img:"https://cdn.endource.com/image/s3-4bc3c79f-f50d-4d66-a5ad-d06f22b7cc86/detail/default.jpg",
        url:"https://www.endource.com/edit/handpicked-swimwear/YpTAq8nnfAABLn-f?splash=true&splashVarient=custom&splashTarget=handpicked-swimwear"
    },
    {
        title:"Puff Sleeves Dresses",
        img:"https://cdn.endource.com/image/s3-b57e3876-d32f-475d-9bef-be78b923554c/detail/default.jpg",
        url:"https://www.endource.com/edit/handpicked-puff-sleeve-dresses/YkGy4kbg-wABFBCZ?splash=true&splashVarient=custom&splashTarget=handpicked-puff-sleeve-dresses"
    },

]

class Handpicked extends Component {
    constructor(){
        super();
        this.state={
            handpick:data
        }
    }
    render() {
    return(
        <div>
             <div className="m-4 p-4 bg-dark">
                <div><h4 className="text-white text-decoration-underline">Handpicked Collection</h4></div>
                <div style={{ margin: "10px", padding: "10px", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {this.state.handpick.map((i, index) => {
                        return <div key={index}>
                            <Card title={i.title} img={i.img} url={i.url} index={index} key={index}/>
                        </div>
                    })}
                </div>
            </div>

        </div>
    );
    }
}

export default Handpicked;