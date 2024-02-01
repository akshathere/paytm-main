import { useState } from "react"
import { useNavigate } from "react-router-dom";

/*eslint-disable*/
export const Search=()=> {
    const [user, setUser] = useState([{
        firstname: "Akshat",
        lastname: "Verma",
        _id: "1"
    }])
    const navigate = useNavigate();

    const SendMoneyBitch = () => {
    // 👇️ navigate to /contacts
    navigate('/send');
  };
    console.log(user.firstname)
    return <div>
        <div className="font-bold p-3 text-xl">
            Users
        </div>
        <div className="border-solid border-1 border-black m-3">
            <div>
                <input type="text" id="first_name"  className="w-full px-2 py-1 border rounded border-slate-200" placeholder={"Search users...."} required></input>
            </div>
        </div>
        <div>
            <div>
                {user.map(users => <Display user1={users}></Display> )}
                {/* <Display user1={user[0]}></Display> */}
            </div>
        </div>
    </div>
}
function Display({ user1}) {
    const navigate = useNavigate();

    const SendMoneyBitch = () => {
    // 👇️ navigate to /contacts
    navigate('/send');
  };
    return <div className="flex justify-between">
        <div className="flex">
            <div className="m-2 px-3 p-1 h-8 rounded-full bg-blue-30 hover:cursor-pointer">
                {user1.firstname[0]}
            </div>
            <div className="p-3 font-semibold pl-1">
                {user1.firstname} {user1.lastname}
            </div>
        </div>
        <div className="flex">
            <button className="px-2 round rounded-lg bg-dark-blue m-3 text-white py-2 ml-5" onClick={SendMoneyBitch} >
            Send Money
            </button>
        </div>
    </div>
}