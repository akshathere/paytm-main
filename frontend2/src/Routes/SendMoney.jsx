

export function SendMoney() {
    const username="Username"
    
    return <div className="h-screen flex justify-center bg-white-30">
        <div className="flex flex-col w-1/3 h-full justify-center">
        <div className=" mt-100 bg-white shadow-lg round rounded-lg">
            <div className="p-5">

            
            <div className="text-3xl pb-10 font-bold flex justify-center mt-5">
                <div>
                    Send Money
                </div>
                
            </div>
            <div className="flex">
                <div className="m-2 px-3 p-1 h-12 w-12 rounded-full bg-green-500 hover:cursor-pointer text-3xl text-white font-semi bold">
                {username[0]}
            </div>
            <div className=" pt-4 text-2xl font-semibold"> {username}</div>
            </div>
            <div className="text-l p-3 font-semibold">
                Amount (in Rs.)
            </div>
            <div>
                <input type="text" id="first_name"  className="w-full m-2 p-3  border rounded border-slate-200" placeholder={"Enter amount"} required></input>
            </div>
            <div>
            <button className="w-full p-3 ml-2 py-2 round rounded-lg bg-green-500 text-white  ">
             Initiate Transfer
        </button>
    </div>
            </div>
        </div>
        
        </div>
    </div>
}