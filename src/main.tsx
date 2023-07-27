import ThemeProvider from "./context/ThemeContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { FirebaseApp, initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase.ts";
import { getAnalytics } from "firebase/analytics";
import { AuthProvider } from "./context/AuthContext.tsx";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./styles/main.css";
import { getAuth } from "firebase/auth";

const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(app);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
