import { useLocation } from "react-router-dom";
import CoffeeItem from "../CoffeeItem";

type CoffeeType = {
	name: string;
	shot: number;
};
type AdeType = {
	name: string;
	juice: string;
};
type A = CoffeeType & AdeType; // intersetion 교차타입
type B = CoffeeType | AdeType; // union 유니언
type some = { [key: number]: number[] };
type C = {
	[key: string]: boolean | number | some;
	a: boolean;
	b: number;
	c: some;
}; //인덱스 시그니처

type D = { a: number; b: string; c: boolean };
type D1 = D["a"]; // number
type D2 = D["a" | "c"]; // number or boolean 인덱스드 엑세스 타입
type D3 = D[keyof D]; //number | string | boolean 모든 key를 가져온다

const test1: A = {
	name: "a",
	juice: "b",
	shot: 1,
};
const test2: B = {
	name: "a",
	juice: "b",
	shot: 1,
};

const Coffee = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const coffeeName = query.get("coffeeName") ?? "NA";

	const coffeeImage: { [key: string]: string } = {
		아메리카노: "/HOT-americano.png",
		라떼: "/HOT-latte.png",
		에이드: "/grapeade.png",
		NA: "",
	};
	const Id = coffeeName ?? "NA";
	return (
		<>
			<CoffeeItem imageUrl={coffeeImage[Id]} name={coffeeName} />
		</>
	);
};
export default Coffee;
