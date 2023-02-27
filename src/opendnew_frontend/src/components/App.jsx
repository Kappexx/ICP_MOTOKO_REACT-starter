import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import homeimg from "../../assets/homeimg.png"

function App() {
  return (
    <div className="App">
      <Header />
      <img className="bottom-space" src={homeimg} />
      <Footer />
    </div>
  );
}

export default App;
