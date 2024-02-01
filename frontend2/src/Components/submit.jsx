/*eslint-disable*/
export function Submit({sign,onClick}){
    return <div>
        <button onClick={onClick} className="w-5/6 round rounded-lg bg-gray-30 m-3 text-white py-2 ml-5">
            {sign}
        </button>
    </div>
}