import Category from "../components/Category"
import Footer from "../components/Footer"
import Handpicked from "../components/Handpicked"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"

const Home=()=>{
    return(
        <div>
            <Navbar/>
            <Slider/>
            <Category/>
            <Handpicked/>
            <Footer/>
        </div>
    )
}

export default Home;