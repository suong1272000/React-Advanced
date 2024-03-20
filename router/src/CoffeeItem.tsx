type CoffeeItemProps = {
	imageUrl: string;
	name: string;
};

const CoffeeItem = ({ imageUrl, name }: CoffeeItemProps) => {
	return (
		<div>
			<img src={imageUrl} alt="이미지" />
			<div>{name}</div>
		</div>
	);
};
export default CoffeeItem;
