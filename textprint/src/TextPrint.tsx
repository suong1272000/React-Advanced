import { SyntheticEvent, useState } from "react";
import Button from "./Button";

const TextPrint = () => {
	const cartData = [
		{ content: "고기 4000원" },
		{ content: "채소 2000원" },
		{ content: "과일 5000원" },
	];

	const [text, setText] = useState<string>("");
	const printText = (e: SyntheticEvent) => {
		setText(e.currentTarget.innerHTML);
	};

	return (
		<>
			{cartData.map((value) => {
				return <Button content={value.content} action={printText} />;
			})}
			<div>{text}</div>
		</>
	);
};
export default TextPrint;
