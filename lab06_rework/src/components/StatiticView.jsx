import NewCustomerTag from "./NewCustomerCard";
import ProfitTag from "./ProfitTag";
import TurnoverTag from "./TurnoverTag";

export default function(){
    return(
        <div className="bg-gray-200 flex gap-5 justify-between w-full">
            <TurnoverTag/>
            <ProfitTag/>
            <NewCustomerTag/>
        </div>
    )
}