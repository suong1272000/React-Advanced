import { SyntheticEvent, useState } from "react";
import Button from "./Button";

const AddCartList = () => {
	const Data = [
		{ name: "고기", price: 4000 },
		{ name: "채소", price: 2000 },
		{ name: "과일", price: 5000 },
	];

	const [text, setText] = useState<string>("");
	const [textList, setTextList] = useState<string[]>([]);
	const [count, setCount] = useState<number>(0);
	const [num, setNum] = useState<number>(0);

	const printNum = (e: SyntheticEvent) => {
		const buttonHtml = e.currentTarget.innerHTML;
		setTextList((prev) => [...prev, buttonHtml]); //배열에 버튼의 내용 추가
		const cartnum = parseInt(e.currentTarget.innerHTML.split(" ")[1]); //문자열을 띄어쓰기 기준으로 자르기
		setNum((prev) => prev + cartnum); //num에 잘라놓은 숫자를 더하기
		setCount((prev) => prev + 1); //버튼을 클릭할때마다 숫자 +1
		setText(e.currentTarget.innerHTML); //버튼의 내용을 text에 출력
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
			<div>
				{textList.map((value) => {
					return <div>{value}</div>;
				})}
			</div>
			<div>
				총 합:{count}개{num}원 <br />
				현재 선택한 품목: {text}
			</div>
		</>
	);
};
export default AddCartList;
