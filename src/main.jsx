import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { VoiceToolkit } from "vtk-voice-ai-sdk";
import "vtk-voice-ai-sdk/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VoiceToolkit
      appId="PASTE_YOUR_APP_ID_HERE"
      apiKey="PASTE_YOUR_APP_KEY_HERE"
      onEvent={(type, payload) => {
        console.log("SDK EVENT:", type, payload);
      }}
    >
      <App />
    </VoiceToolkit>
  </React.StrictMode>
);