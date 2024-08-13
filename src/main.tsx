import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRoutes from "./routes/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MyRoutes />
    </StrictMode>
);