import search from '../assets/search.png'
import help from '../assets/help.png'
import user from '../assets/user.png'

export default function DashboardHeader(){
    return(
        <div className="flex justify-between m-3 p-3 border-b border-gray-300">
            <div>
                <p className="text-4xl font-bold">Dashboard</p>
            </div>
            <div className="flex gap-2">
                <input className="border-2 border-black rounded-2xl m-2 p-2" type="text" name="" id="" placeholder='Type keyword ...'/>
                <button className='hover:bg-blue-200 p-3 rounded-2xl'><img className='size-[30px]' src={search} alt="" /></button>
                <button className='hover:bg-blue-200 p-3 rounded-2xl'><img className='size-[30px]' src={help} alt="" /></button>
                <button className='hover:bg-blue-200 p-3 rounded-2xl'><img className='size-[30px]' src={user} alt="" /></button>
            </div>
        </div>
    )
}