export default function StatusBagde({status}){
    const style = {
        "Completed" : 'bg-green-100 text-green-700 border-green-400',
        'In-progress' : 'bg-yellow-100 text-yellow-700 border-yellow-400',
        'New' : 'bg-gray-200 text-gray-800 border border-gray-400'
    }

    return (
        <span
            className={`px-2 py-[2px] rounded-xl text-[10px] font-medium border inline-block whitespace-nowrap ${style[status] || ''}`}
        >
            {status}
        </span>

    )
}