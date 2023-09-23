import React from "react";
import ReactDOM from "react-dom/client";
import { RouterList } from "./Router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ToastContainer />
        <GlobalStyle />
        <RouterList />
    </React.StrictMode>
);
