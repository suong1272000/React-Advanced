import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DoorLockProvider from "./provider/DoorLockProvider";


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<DoorLockProvider>``
			<App />
	</DoorLockProvider>

);
