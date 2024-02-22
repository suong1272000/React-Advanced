import { SyntheticEvent, useState } from "react";
import Button from "./Button";

const AddCart = () => {
	const Data = [
		{ name: "고기", price: 4000 },
		{ name: "채소", price: 2000 },
		{ name: "과일", price: 5000 },
	];

	const [num, setNum] = useState<number>(0);
	const printNum = (e: SyntheticEvent) => {
		const cartnum = parseInt(e.currentTarget.innerHTML.split(" ")[1]); //문자열을 띄어쓰기 기준으로 자르기
		setNum((prev) => prev + cartnum); //num에 잘라놓은 숫자를 더하기
	};

	return (
		<>
			{Data.map((value) => {
				return (
					<Button
						content={`${value.name} ${value.price}`}
						action={printNum}
					/>
				);
			})}
			<div>{num}</div>
		</>
	);
};
export default AddCart;
