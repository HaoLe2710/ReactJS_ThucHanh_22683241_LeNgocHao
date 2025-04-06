import NavBar from "../components/NavBar";

export default function Dashboard(){
    return(
        <div className=" grid bg-gray-200 border-3 justify-self-center grid-cols-4">
            <div className="bg-amber-200">
                <NavBar/>
            </div>
            <div className="col-span-3 bg-blue-300">
                <div>
                    
                </div>
            </div>
        </div>
    )
}