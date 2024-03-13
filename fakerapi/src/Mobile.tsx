import { faCircle } from "@fortawesome/free-solid-svg-icons";
import IconsMobile, { IconsMobileProps } from "./IconsMobile";

const Mobile = () => {
	const data: IconsMobileProps[] = [
		{ icon: faCircle, surgery: "동그라미" },
		{ icon: faCircle, surgery: "동그라미" },
		{ icon: faCircle, surgery: "동그라미" },
	];
	return (
		<div>
			<h1>모바일</h1>
			{data.map((v) => (
				<IconsMobile {...v} />
			))}
		</div>
	);
};
export default Mobile;
