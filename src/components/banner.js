import news2 from "../image/news2.jpg"
import newss2 from "../image/newss2.png"
import newss from "../image/newss.jpg"

const Banner=()=>{

    return(<div id="demo" className="carousel slide m-5 p-3" data-bs-ride="carousel">
            <div className="carousel-indicators ">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner align-content-center">
                <div className="carousel-item active">
                    <img src={news2} alt="/" className="d-block" style={{width:"95%",height:"600px"}}></img>
                </div>
                <div className="carousel-item">
                    <img src={newss2} alt="/" className="d-block" style={{width:"95%",height:"600px"}}></img>
                </div>
                <div className="carousel-item">
                    <img src={newss} alt="/" className="d-block" style={{width:"95%", height:"600px"}}></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
            
        </div>

    )
}

export default Banner;