import { useEffect } from "react";
import NewCustomerTag from "./NewCustomerTag";
import ProfitTag from "./ProfitTag";
import TurnoverTag from "./TurnoverTag";
import DataTable from "./DataTable";

export default function DashboardDetail(){
    return(
        <div className="bg-white flex flex-col p-5">
            <div className="flex gap-5">
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