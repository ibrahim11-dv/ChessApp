import {Outlet} from "react-router-dom"
import NavBar from "../components/Navbar/NavBar.jsx"

function MainLayout(){
    return(
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default MainLayout