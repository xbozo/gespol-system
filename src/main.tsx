import React from "react";
import ReactDOM from "react-dom/client";
import { RouterList } from "./Router";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterList />
	</React.StrictMode>
);
