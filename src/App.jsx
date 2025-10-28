import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/HeaderClair";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Hiska from "./components/Hiska";
import InProgress from "./components/InProgress";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/work-in-progress" element={<InProgress />} />
              <Route path="/hiska" element={<Hiska />} />
            </Routes>{" "}
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
