import "./App.css";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profiles/Profile";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <div className="blur blurone"></div>
      <div className="blur blurtwo"></div>
      {/* <Home /> */}
      {/* <Profile /> */}
      <Auth />
    </div>
  );
}

export default App;
