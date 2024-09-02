import { Link} from "react-router-dom";
import './navbar.css'



const Navbar=({setCategory})=>{
  return(
        <>
        <nav className="navbar navbar-expand-sm bg-secondary mx-1 rounded-2 fixed-top">
        <div className="container-fluid">
          <Link to ='/' style={{textDecoration:"none"}}><a class="navbar-brand" href="/"><span className="h3 bg-white text-black rounded-3 p-1">
            News<span className="text-danger">Nexa</span></span></a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
          </button>
        
      <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
      <ul className="navbar-nav me-auto h6">
        
        <Link to='/general' style={{textDecoration:"none"}}>
          <li className="nav-item">
        <div className="nav-link text-white" onClick={()=>setCategory("general")}>General</div>
        </li></Link>
      
        <Link to='/business' style={{textDecoration:"none"}}>
          <li className="nav-item">
        <div className="nav-link text-white" onClick={()=>setCategory("business")}>Business</div>
        </li></Link>
        <Link to='/sports' style={{textDecoration:"none"}}>
        <li className="nav-item">
        <div className="nav-link text-white" onClick={()=>setCategory("sports")}>Sports</div>
        </li></Link>
        <Link to='/entertainment' style={{textDecoration:"none"}}>
        <li className="nav-item">
        <div  className="nav-link text-white" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li> </Link>
        <Link to='/health' style={{textDecoration:"none"}}>
        <li className="nav-item">
        <div className="nav-link text-white" onClick={()=>setCategory("health")}>Health</div>
        </li></Link>
        <Link to='/science' style={{textDecoration:"none"}}>
        <li className="nav-item">
        <div  className="nav-link text-white" onClick={()=>setCategory("science")}>Science</div>
        </li></Link>
        <Link to='/technology'style={{textDecoration:"none"}}>
        <li className="nav-item">
        <div  className="nav-link text-white" onClick={()=>setCategory("technology")}>Technology</div>
        </li></Link>
     
        </ul>
        
   
      
    </div>
  </div>
</nav>

        </>
    )
}


export default Navbar;