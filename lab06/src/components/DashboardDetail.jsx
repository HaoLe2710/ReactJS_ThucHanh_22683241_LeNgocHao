import { useEffect } from "react";
import NewCustomerTag from "./NewCustomerTag";
import ProfitTag from "./ProfitTag";
import TurnoverTag from "./TurnoverTag";

export default function DashboardDetail(){
    return(
        <div className="bg-white flex flex-col p-5">
            <div className="flex justify-between">
                <TurnoverTag/>
                <ProfitTag/>
                <NewCustomerTag/>
            </div>
        </div>
    )
}