import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
        Header
         <Outlet></Outlet>   
        </div>
    );
};

export default Main;