import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Feed from "./components/Feed";
import CreateBlog from "./components/CreateBlog";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequiredUser from "./components/RequiredUser";
import OnlyIfNotLogIn from "./components/OnlyIfNotLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<RequiredUser />}>
          <Route element={<Home />}>
            <Route path="/" element={<Feed />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Route>
        </Route>
        <Route element={<OnlyIfNotLogIn />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
