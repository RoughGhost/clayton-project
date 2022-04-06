import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen ">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default App;
