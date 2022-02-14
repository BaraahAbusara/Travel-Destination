import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import Detail from './Details';
import './tourDetails.css';

function TourDetails(props) {
    const [isShown, setisShown] = useState(false);
    const handleShow = () => { setisShown(!isShown) }

    let { id } = useParams();

    let data = props.tour.filter(trip => {
        if (trip.id == id)
            return trip;
    })

    return (

        <div className="fullDetails">

            <img src={data[0].image} alt="Destination Image"></img>

            <h3>destination: {data[0].name}</h3>

            <h4>Price:{data[0].price}</h4>

            <Detail data={data[0]} isShown={isShown} handleShow={handleShow}/>

        </div>
    );
}

export default TourDetails;