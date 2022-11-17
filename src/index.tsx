import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProviderReceipt from "./contexts/ReceiptsContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ProviderReceipt>
      <App />
    </ProviderReceipt>
  </React.StrictMode>
);
