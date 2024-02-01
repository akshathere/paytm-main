import { Balance } from "../Components/balance";
import { Headings3 } from "../Components/heading3";
import { Search } from "../Components/search";

export function Dashboard(){
    return <div>
        <Headings3></Headings3>
        <Balance bal={"10,000"}></Balance>
        <Search></Search>
    </div>
}