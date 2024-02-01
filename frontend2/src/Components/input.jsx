export function Input({label,placeholder}){


        return    <div className="border-solid border-1 border-black">
                <label className="block mb-2 text-sm font-medium pl-5 p-1">{label}</label>
                <div>
                <input type="text" id="first_name" className=" p-1 pb-2 mb-1 px-3 w-5/6 mx-5 px-4 mr border rounded border-slate-200" placeholder={placeholder} required></input>
                </div>
            </div>
        }