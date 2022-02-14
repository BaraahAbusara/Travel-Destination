import Tours from "../tours/Tours";

import './home.css';
import data from "../../data/db.json";

import {Routes, Route} from 'react-router-dom';

function Home() {
    return (

        <> 
            <Tours data={data} />  
        </>
    )
}
export default Home;