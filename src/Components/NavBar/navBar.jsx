import { Link, NavLink } from "react-router-dom"
import "./navBar.css"


const CustomNavBar = ()=>{

    return(
        <>
        <ul className="nav">
        <li className="nav-item">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"jewellery"}>Jewellery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"electronics"}>Electronics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"mensclothing"}>Mens Clothing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"womensclothing"}>Womens Clothing</NavLink>
        </li>
        
      </ul>


        </>
    )
}

export default CustomNavBar