import { SyntheticEvent } from "react";
type ButtonProps = {
	content: string;
	action: (e: SyntheticEvent) => void;
};
const Button = ({ content, action }: ButtonProps) => {
	return <button onClick={action}>{content}</button>;
};
export default Button;
