import CoffeeItem from "../CoffeeItem";
import { coffeeImage } from "../constant/image";
import { useGetNameFromQuery } from "../util/url";

const Coffee = () => {
	const coffeeName = useGetNameFromQuery("coffeeName", "NA");
	const url = coffeeImage[coffeeName] ?? coffeeImage.NA;
	return (
		<>
			<CoffeeItem imageUrl={url} name={coffeeName} />
		</>
	);
};
export default Coffee;
