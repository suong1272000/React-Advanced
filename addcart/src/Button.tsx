import { SyntheticEvent } from "react";

type ButtonProps = {
	action: (e: SyntheticEvent) => void;
	content: string;
};

const Button = ({ action, content }: ButtonProps) => {
	return <button onClick={action}>{content}</button>;
};
export default Button;
