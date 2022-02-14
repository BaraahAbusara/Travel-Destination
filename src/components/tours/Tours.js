
import './tours.css';
import Tour from './tour/Tour'; 
import {Link} from 'react-router-dom';
import TourDetails from '../tourDetails/TourDetails'; 

function tours(props) {
    return (
        <div className="container">
            {
                props.data.map((tour,idx)=> {
                    return (
                    <div className="card" key={idx}>
                        <Link to = {`/city/${tour.id}`}><Tour tour ={tour} tourKey={idx}/></Link>
                    </div>);

                })
            }
        </div>
    );

}
export default tours;

// {
//     "id": "recIwxrvU9HfJR3B4",
//     "name": "Ireland",
//     "info": "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
//     "image": "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
//     "price": "3,895"
//     }