import { useEffect } from "react";
import NewCustomerTag from "./NewCustomerTag";
import ProfitTag from "./ProfitTag";
import TurnoverTag from "./TurnoverTag";
import DataTable from "./DataTable";
import DashboardHeader from "./DashboardHeader";

export default function DashboardDetail(){
    return(
        <div className="bg-white flex flex-col p-5">
            <div className="">
                <DashboardHeader/>
            </div>
            <div className="flex gap-5 justify-between ml-3 mr-3">
                <TurnoverTag/>
                <ProfitTag/>
                <NewCustomerTag/>
            </div>
            <div>
                <DataTable/>
            </div>
        </div>
    )
}