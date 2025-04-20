import { useEffect } from "react";
import NewCustomerTag from "./NewCustomerTag";
import ProfitTag from "./ProfitTag";
import TurnoverTag from "./TurnoverTag";
import DataTable from "./DataTable";
import DashboardHeader from "./DashboardHeader";
import dashboard_body from '../assets/dashboard_body.png'
import StatiticView from "./StatiticView";

export default function DashboardDetail(){
    return(
        <div className="bg-white flex flex-col p-5">
            <div className="">
                <DashboardHeader/>
            </div>
            <div>
                <div className="p-3 m-3 flex align-middle gap-2">
                    <img className="size-[30px]" src={dashboard_body} alt="" />
                    <p className="text-2xl font-bold">
                        Overview
                    </p>
                </div>
                <div>
                    <StatiticView/>
                </div>
            </div>
            <div className="p-2 border-dashed rounded-2xl">
                <DataTable/>
            </div>
        </div>
    )
}