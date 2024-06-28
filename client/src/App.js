import React from "react";
import SearchStock from "./Components/Home/SearchStock.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import { SymbolProvider } from "./Components/SymbolContext.js";

function App() {
  return (
    <>
    <SymbolProvider>
      <div>
        <Navbar />
        <SearchStock />
      </div><footer>
          <Footer />
        </footer>      
    </SymbolProvider>

      </>
  );
}

export default App;
