import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.ts"; // Import Redux store
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap App with Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Performance monitoring (optional)
reportWebVitals();
