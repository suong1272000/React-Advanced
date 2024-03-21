import { ObjEmptyType } from "../util/url";

type CoffeeImageType = ObjEmptyType & {
	[key: string]: string;
};
export const coffeeImage: CoffeeImageType = {
	아메리카노: "/HOT-americano.png",
	라떼: "/HOT-latte.png",
	에이드: "/grapeade.png",
	NA: "/no-image.jpg",
};
