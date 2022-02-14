import './tourDetails.css';

function Detail(props) {

    {
        if (props.isShown) {
            return (
                <div className='info'>
                    {props.data.info}
                    <br/>
                    <button onClick={props.handleShow}>See less</button>
                </div>
            )
        }
        else {
            return (
                <div className='info'>
                    {props.data.info.substring(0,200)+" ..."}
                    <br/>
                    <button onClick={props.handleShow}>See more</button>
                </div>
            )
        }
    }


}
export default Detail;
