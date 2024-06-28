import React from "react";
import SearchStock from "./Components/Home/SearchStock.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <><div>
      <Navbar />
      <SearchStock />
    </div><footer className="fixed bottom-1 footer">
        <Footer />
      </footer></>
  );
}

export default App;
