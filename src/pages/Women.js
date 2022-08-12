import Category from "../components/Category"
import Footer from "../components/Footer"
import Handpicked from "../components/Handpicked"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"

const Women=()=>{
    return(
        <div>
            <Navbar/>
            <Slider/>
            <Category type="women"/>
            <Handpicked/>
            <Footer/>
        </div>
    )
}

export default Women;