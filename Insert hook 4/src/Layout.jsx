import { Link ,Outlet} from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> /
        <Link to="insert">insert</Link> /
        <Link to="display">display</Link>/
        <Link to="not found"></Link>
        <hr />


        <Outlet/>


        <hr />
        www.mycomoany.com

        </>
    )
}
export default Layout;