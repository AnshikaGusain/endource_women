import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Footer from "../components/Footer";

const Home=()=>{
    return (
        <div>
            <Navbar/>
            <Category type="home"/>
            <Footer/>
        </div>
    )
}

export default Home;