import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import './home.css';
import data from "../../data/db.json";

function Home() {
    return (
        <>
            <Header />
            <Tours data={data} />
            <Footer />
        </>
    )
}
export default Home;