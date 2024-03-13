import { faSquare } from "@fortawesome/free-solid-svg-icons";
import Icons, { IconsProps } from "./Icons";

const DeskTop = () => {
	const data: IconsProps[] = [
		{ icon: faSquare, surgery: "네모" },
		{ icon: faSquare, surgery: "네모" },
		{ icon: faSquare, surgery: "네모" },
	];
	return (
		<div>
			<h1>데스크탑</h1>
			{data.map((v) => (
				<Icons {...v} />
			))}
		</div>
	);
};
export default DeskTop;
