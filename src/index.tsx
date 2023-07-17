import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Router from "./Router";

import "./index.scss";
import "./normalize.css";

const firebaseConfig = {
  apiKey: "AIzaSyDYaRJ-Wu238h9HtgVfpK-YrBPy9MjhofY",
  authDomain: "projectx-87e81.firebaseapp.com",
  projectId: "projectx-87e81",
  storageBucket: "projectx-87e81.appspot.com",
  messagingSenderId: "434326078448",
  appId: "1:434326078448:web:198113d961765f69f35335",
  measurementId: "G-KPDHD6VMW4"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
