import { PrimeReactProvider } from "primereact/api";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import App from "./App";
import { TodoPage } from "./pages/TodoPage/TodoPage";
import "./style/index.css";

const basename = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter basename={basename}>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route
                index
                element={<App />}
              />
              <Route
                path=":id"
                element={<TodoPage />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);
