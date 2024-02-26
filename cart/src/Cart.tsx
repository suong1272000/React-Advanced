import { SyntheticEvent, useState } from "react";
import Button from "./Button";

type Cart = {
	name: string;
	count: number;
};

const Cart = () => {
	const Data = ["1번 1000", "2번 2000", "3번 3000"];

	const [num, setNum] = useState<number>(0);
	const [cart, setCart] = useState<Cart[]>([]);

	const toggleButton = (e: SyntheticEvent) => {
		const [name, price] = e.currentTarget.innerHTML.split(" ");
		const Price = parseInt(price);

		setNum((prev) => prev + Price);

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
			{Data.map((v) => {
				return <Button content={v} action={toggleButton} />;
			})}
			<div>
				{cart.map((v) => (
					<div>
						{v.name} {v.count}
					</div>
				))}
			</div>

			<div>총가격: {num}원</div>
		</>
	);
};
export default Cart;
