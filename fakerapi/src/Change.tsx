import { useContext } from "react";
import { DoorLockContext } from "./provider/DoorLockProvider";

const Change = () => {
    const { setIsTen } = useContext(DoorLockContext);

    return <button onClick={()=>setIsTen((prev)=> !prev)}>변경</button>;
};

export default Change