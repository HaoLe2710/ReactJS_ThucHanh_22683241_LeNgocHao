import NewCustomerTag from "./NewCustomerTag";
import ProfitTag from "./ProfitTag";
import TurnoverTag from "./TurnoverTag";

export default function(){
    return(
        <div className=" flex gap-5 justify-between w-full m-3">
            <TurnoverTag/>
            <ProfitTag/>
            <NewCustomerTag/>
        </div>
    )
}