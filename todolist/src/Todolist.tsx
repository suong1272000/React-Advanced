import Button from "./Button"

const Todolist = () => {
    const Prompt = () => {prompt("할 일을 추가하세요.")}

    return(   
        <>
        <h2>Todo</h2>
        <input type="text" />
        <Button action={Prompt} />
        </>
        )
}

export default Todolist