type ButtonProps = {
    action: () => void
}

const Button = ({action}:ButtonProps) => {
    return <button onClick={action}>Add Todo</button>
}
export default Button