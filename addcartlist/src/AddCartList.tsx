import { SyntheticEvent, useState } from "react";
import Button from "./Button";

type Cart = {
	name: string;
	count: number;
};

const AddCartList = () => {
	const Data = [
		{ name: "고기", price: 4000 },
		{ name: "채소", price: 2000 },
		{ name: "과일", price: 5000 },
	];

	const [text, setText] = useState<string>("");
	const [count, setCount] = useState<number>(0);
	const [num, setNum] = useState<number>(0);
	const [cart, setCart] = useState<Cart[]>([]); //setCart로 배열에 넣을거임

	const printNum = (e: SyntheticEvent) => {
		const [name, price] = e.currentTarget.innerHTML.split(" ");
		const cartnum = parseInt(price); //문자열을 띄어쓰기 기준으로 자르기

		setNum((prev) => prev + cartnum); //num에 잘라놓은 숫자를 더하기
		setCount((prev) => prev + 1); //버튼을 클릭할때마다 숫자 +1
		setText(e.currentTarget.innerHTML); //버튼의 내용을 text에 출력
		const obj = cart.find((v) => v.name === name);
		const isDupl = !!obj;
		if (isDupl) {
			setCart((prev) => {
				return prev.map((v) =>
					v.name === obj.name ? { ...v, count: v.count + 1 } : v
				);
			});
		} else {
			setCart((prev) => [...prev, { name: name, count: 1 }]);
		}
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
				{cart.map((v) => (
					<div>
						{v.name} {v.count}
					</div>
				))}
			</div>
			<div>
				총 합:{count}개{num}원 <br />
				현재 선택한 품목: {text}
			</div>
		</>
	);
};
export default AddCartList;
