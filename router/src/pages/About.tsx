import { useLocation } from "react-router-dom";

const About = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const lang = query.get("lang");

	return <div>어바웃 페이지 {lang}</div>;
};
export default About;
