type ButtonProps = {
	action: () => void;
	content: string;
};

const Button = ({ action, content }: ButtonProps) => {
	return <button onClick={action}>{content}</button>;
};
export default Button;
