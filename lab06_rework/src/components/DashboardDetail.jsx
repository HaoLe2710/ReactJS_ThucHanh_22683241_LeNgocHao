import DashboardHeader from "./DashboardHeader";
import DataTable from "./DataTable";
import StatiticView from "./StatiticView";

export default function DashboardDetail(){
    return(
        <div className="flex flex-col">
            {/* <p>This is Dashboard Detail</p> */}
            <DashboardHeader/>
            <StatiticView/>
            <DataTable/>
        </div>
    )
}