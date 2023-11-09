import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Trending from "./components/Trending";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Tvseries from "./components/Tvseries";
import MainNav from "./components/MainNav";
import PrimarySearchAppBar from "./components/SearchBar";
import LoginPage from "./Pages/LoginPage";
import LoadingScreen from "./components/Loading";
import { useAppContext } from "./Context/appContext";
import Sidebar from "./components/Sidebar.js";
import ProfilePage from "./Pages/ProfilePage";
import FriendPage from "./Pages/FriendPage";
import MessagingTab from "./components/MessagingTab";
import ViewFriendsPage from "./Pages/ViewFriendsPage";

function App() {
  const { isLoading, user } = useAppContext();
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {isLoading && <LoadingScreen />}
      <PrimarySearchAppBar />
      <Sidebar />
      <div className="container">
        <Routes>
          <Route index element={<Trending />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
          <Route path="/tv" element={<Tvseries />}></Route>
          <Route path="/user/:id" element={<FriendPage />} />
          <Route path="/search" element={<Search />}></Route>
          <Route
            path="/profile"
            element={user ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route path="/friends" element={<ViewFriendsPage />} />
        </Routes>
      </div>
      {/* <MessagingTab /> */}
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
