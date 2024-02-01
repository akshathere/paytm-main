export function Balance({bal}){
    return <div className=" p-3 flex text-xl">
    <div className=" font-bold  ">
        Your balance
    </div>
    <div className=" pl-5 font-semibold">
        Rs {bal}
    </div>
    </div>
}