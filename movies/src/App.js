import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Trending from "./components/Trending";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Tvseries from "./components/Tvseries";
import MainNav from "./components/MainNav";
import PrimarySearchAppBar from "./components/SearchBar";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <PrimarySearchAppBar />
      <div className="container">
        <Routes>
          <Route index element={<Trending />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
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
