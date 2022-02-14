

function Tour (props )
{
    return (

        <div className="card">
        <h3 className="title">Distination: {props.tour.name}</h3>

        <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
        </div>

        <img src={props.tour.image} alt="Tour Image"/>
        </div>);

}
export default Tour; 