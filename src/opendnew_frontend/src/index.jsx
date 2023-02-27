import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import { Principal } from "@dfinity/principal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Problem app jsx shi paths ver xedavs

// const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
// export default CURRENT_USER_ID;

// const init = async () => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// };

// init();
