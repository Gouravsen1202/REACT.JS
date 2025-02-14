import { Link ,Outlet} from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> /
        <Link to="about">about</Link> /
        <Link to="contact">Contact</Link>
        <hr />
        <Outlet/>
        <hr />
        www.mycomoany.com

        </>
    )
}
export default Layout;