import DashboardDetail from "../components/DashboardDetail";
import NavBar from "../components/NavBar";

export default function Dashboard(){
    return(
        <div className=" grid grid-cols-4">
            <div className="bg-amber-200">
                <NavBar/>
            </div>
            <div className="col-span-3 bg-blue-300">
                <DashboardDetail/>
            </div>
        </div>
    )
}