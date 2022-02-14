
import './tours.css';

function tours(props) {
    return (
        <div className="container">
            {
                props.data.map(dis => {
                    return (<div className="card">
                        <h3 className ="title">Distination: {dis.name}</h3>
                        <div className ="bar">
                            <div className ="emptybar"></div>
                            <div className="filledbar"></div>
                        </div>
                        <img src={dis.image} alt="Distination Image"></img>
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