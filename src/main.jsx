import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { VoiceToolkit } from "vtk-voice-ai-sdk";
import "vtk-voice-ai-sdk/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<VoiceToolkit
  appId={import.meta.env.VITE_AIROMOB_APP_ID}
  apiKey={import.meta.env.VITE_AIROMOB_API_KEY}
  onEvent={(type, payload) => {
    console.log("SDK EVENT:", type, payload);
  }}
>
      <App />
    </VoiceToolkit>
  </React.StrictMode>
);