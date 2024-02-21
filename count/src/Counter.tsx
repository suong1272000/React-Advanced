import { useState } from "react"
import Button from "./Button";
import Title from "./Title";

const Counter = () => {
    const [num,setNum] = useState<number>(0)

    const minus = () => {
      setNum((prev)=>prev - 1)
    };
    const plus = () => {
      setNum((prev) => prev + 1)
    };
    return (
        <>
            <Button symbol="-" action={minus}/>
            <Title content={num} />
            <Button symbol="+" action={plus}/>
        </>
    )
}
export default Counter