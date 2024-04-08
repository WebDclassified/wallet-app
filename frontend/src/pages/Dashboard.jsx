
import { Appbar } from "../componenets/Appbar";
import { Balance } from "../componenets/Balance";
import { Users } from "../componenets/Users";

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}