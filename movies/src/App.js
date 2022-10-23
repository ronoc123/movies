import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Trending from "./components/Trending";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Tvseries from "./components/Tvseries";
import MainNav from "./components/MainNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<Trending />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/tv" element={<Tvseries />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
