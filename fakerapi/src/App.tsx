import { useMediaQuery } from "react-responsive";
import DeskTop from "./DeskTop";
import Mobile from "./Mobile";

function App() {
	const isDesktop = useMediaQuery({ minWidth: 1224 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
	const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 767 });

	return (
		<div className="App">
			{isDesktop && <DeskTop />}
			{isMobile && <Mobile />}
		</div>
	);
}

export default App;
