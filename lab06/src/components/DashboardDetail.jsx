import { useEffect } from "react";
import NewCustomerTag from "./NewCustomerTag";
import ProfitTag from "./ProfitTag";
import TurnoverTag from "./TurnoverTag";
import DataTable from "./DataTable";
import DashboardHeader from "./DashboardHeader";
import dashboard_body from '../assets/dashboard_body.png'

export default function DashboardDetail(){
    return(
        <div className="bg-white flex flex-col p-5">
            <div className="">
                <DashboardHeader/>
            </div>
            <div className="p-3 m-3 flex align-middle gap-2">
                <img className="size-[30px]" src={dashboard_body} alt="" />
                <p className="text-2xl font-bold">
                    Overview
                </p>
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