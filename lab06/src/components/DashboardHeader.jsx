export default function DashboardHeader(){
    return(
        <div className="flex justify-between m-3 p-3 border-b border-gray-300">
            <div>
                <p className="text-2xl font-bold">Dashboard</p>
            </div>
            <div className="flex gap-2">
                <input className="border-2 border-black rounded-2xl" type="text" name="" id="" />
                <button>Search</button>
                <button>Help</button>
                <button>Avatar</button>
            </div>
        </div>
    )
}