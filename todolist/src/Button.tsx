import { SyntheticEvent } from "react";

type ButtonProps = {
	action: (e: SyntheticEvent) => void;
};

const Button = ({ action }: ButtonProps) => {
	return <button onClick={action}>Add Todo</button>;
};
export default Button;
