export default function NavBar(){
    return (
        <div className="flex flex-col gap-5 p-3 m-3">
            <div className="bg-blue-300 rounded-xl p-3 w-[350px]">
                <p>Dashboard</p>
            </div>
            <div className="bg-blue-300 rounded-xl p-3 w-[350px]">
                <p>NavLink 1</p>
            </div>
            <div className="bg-blue-300 rounded-xl p-3 w-[350px]">
                <p>NavLink 2</p>
            </div>
            <div className="bg-blue-300 rounded-xl p-3 w-[350px]">
                <p>NavLink 3</p>
            </div>
            <div className="bg-blue-300 rounded-xl p-3 w-[350px]">
                <p>NavLink 4</p>
            </div>
        </div>
    )
}