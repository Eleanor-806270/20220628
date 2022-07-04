import React from "react";
import BannerContainer from "./components/banner/BannerContainer";
import ProdContainer from "./components/prod/ProdContainer";
import './app.scss'

function App() {
  return (
    <div className="warpper">
      <BannerContainer />
      <ProdContainer/>
    </div>
  );
}

export default App;
