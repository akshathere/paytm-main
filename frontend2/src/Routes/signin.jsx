
import { Headings2 } from "../Components/heading2";
import { Input } from "../Components/input";
import { Submit } from "../Components/submit";
import { Warning2 } from "../Components/warning2";

export function Signin(){
    return <>
    <div className="flex  justify-center">
    <div className=" flex w-2/4 bg-blue-30 m-10 justify-center round rounded-lg">
    <div className="w-96 bg-white round rounded-lg m-10 flex flex-col justify-center">
    <Headings2></Headings2>
    <Input label={"E-mail"} placeholder={"jatt@gmail.com"}></Input>
    <Input label={"Password"} placeholder={""}></Input>
    <Submit sign={"Sign in"}></Submit>
    <Warning2></Warning2>
    </div>
    </div>
    </div>
    </>
}