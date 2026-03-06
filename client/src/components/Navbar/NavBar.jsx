import "./navBar.css"
import logo from"../../assets/appLogo.png"
import { useNavigate, Link } from "react-router-dom"
const navbar =()=>{
    const navigat = useNavigate();
    return(
        <nav>
            <div className="logo"><img src={logo}/>ChessForGeeks</div> 
            <ul className="navLinks">
                <li><Link to="/playLocaly">play Localy</Link></li>
                <li><Link >play online</Link></li>
                <li><Link >puzzles</Link></li>
                <li><Link >profile</Link></li>
            </ul>
            <div className="btns">
                <button className="loginBtn" onClick={()=>{navigat("/login")}}>Login in</button>
                <button className="registerBtn" onClick={()=>{navigat("/register")}}>sign in</button>
            </div>
        </nav>
    )
}
export default navbar