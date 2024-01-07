import React from "react";
import Desktop from "./components/Desktop";
import Tablet from "./components/Tablet";
import Mobile from "./components/Mobile";

const App = () => {
  return (
    <div>
      <div className="lg:block md:hidden sm:hidden hidden">
        <Desktop />
      </div>
      <div className="md:block sm:hidden lg:hidden hidden">
        <Tablet />
      </div>
      <div className="sm:hidden md:hidden lg:hidden">
        <Mobile />
      </div>
    </div>
  );
};

export default App;
