// import { createContext, useState } from "react";

import "./App.css";
import Header from "./Componets/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Componets/Footer/Footer";

// export const jobContext = createContext([]);
// export const detailsContext = createContext([]);
function App() {
  // const { jobs, initialCart } = useLoaderData()
  // const [job, setJob] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <div className="md:min-h-[calc(100vh-140px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
