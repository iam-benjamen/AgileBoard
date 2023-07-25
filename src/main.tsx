import ThemeProvider from "./context/ThemeContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase.ts";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
import 'firebase/firestore'

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./styles/main.css";


const app = initializeApp(firebaseConfig)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
