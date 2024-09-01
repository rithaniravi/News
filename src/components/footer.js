import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { useState} from "react";

const Footer=()=>{
    const handleClick=(e)=>{
        
        e.preventDefault()
        alert("Thank you for your subscription")
        setDisable(1)
        

    }
    const[Mail,setMail]=useState("")
    const [disable,setDisable]=useState(0)
    return(
        <div className='container-fluid-expand-sm'>
            <footer className="footerp-2 rounded bg-secondary">
                <p className="text-white text-center font-weight-bolder mt-4 pt-4">NewsNexa - 2023-2024, All Rights Reserved</p>
                <div class="row p-1">
                    <div class="col-sm-6 text-center p-3">
                        <h5 className='text-white font-weight-bold'>SOCIAL MEDIA</h5>
                        <button className='btn'><FontAwesomeIcon icon={faFacebook} style={{color: "#cfcfcf",height:"20",width:"30"}} /></button>
                        <button className='btn'><FontAwesomeIcon icon={faInstagram} style={{color: "#cfcfcf",height:"20",width:"30"}} /></button>
                        <button className='btn'><FontAwesomeIcon icon={faLinkedin} style={{color: "#cfcfcf",height:"20",width:"30"}} /></button>
                    </div>
                    <div class="col-sm-6 text-center P-3">
                        <h5 className='text-white'>STAY UPDATE WITH US</h5>
                        <input type='text' placeholder='Enter Your Email Id' 
                        ref={({required:"mailId required"})}
                        
                        value={Mail} 
                        onChange={(e)=>setMail(e.target.value)} 
                        className='input rounded p-2 m-2'/>
                        <button className='btn btn-danger m-2 mt-1' disable={disable} onClick={handleClick}>Subscribe</button>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;

