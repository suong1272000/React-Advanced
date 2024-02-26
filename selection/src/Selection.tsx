import { SyntheticEvent, useState } from "react";
import Button from "./Button";

const Selection = () => {
	const Data = ["1번", "2번", "3번"];

	const [text, setText] = useState<string>("");
	const printText = (e: SyntheticEvent) => {
		setText(e.currentTarget.innerHTML);
	};

	return (
		<>
			{Data.map((v) => {
				return <Button content={v} action={printText}></Button>;
			})}
			<div>{text}</div>
		</>
	);
};
export default Selection;
