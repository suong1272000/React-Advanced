type ButtonProps = {
    action: () => void;
    symbol:string;
};

const Button = ({action, symbol}:ButtonProps) => {
    return <button onClick={action}>{symbol}</button>;
};

export default Button;