import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { router } from "./app/";
import "./styles.css";

const root = document.getElementById("root");
if (root)
    createRoot(root).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    );
