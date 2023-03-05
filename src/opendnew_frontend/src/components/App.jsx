import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import homeimg from "../../assets/homeimg.png"
import Item from "./Item";

function App() {

  return (
    <div className="App">
      <Header />
      <Item />
      {/* <img className="bottom-space" src={homeimg} /> */}
      <Footer />
    </div>
  );
}

export default App;
