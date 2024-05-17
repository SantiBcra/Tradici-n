import logo from "../../../public/1.jpg"
import {Link} from "react-router-dom"
import "./navBar.css"

function NavBar() {
    return ( 
<div className="bar">
      
    <img src={logo} className="logo"></img>
    <div className="options">

<Link to="/MainDashboard"> 
<button className="option">Dashboard</button>
</Link>

    </div>
    
    
</div>
     );
}

export default NavBar;