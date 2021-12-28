import "./styles.css";
import Join from "./Components/JoinUs";
import Setting from "./Components/Settings";
import Login from "./Components/Login";
import Contact from "./Components/ContactUs";
import Search from "./Components/Search";
import Help from "./Components/Help";
import Home from "./Components/Home";
import Download from "./Components/Download";
export default function App() {
  return (
    <div className="App">
      <div>
        <Join />
        <Setting />
      </div>
      <div>
        <Login />
        <Contact />
      </div>
      <div>
        <Search />
        <Help />
      </div>
      <div>
        <Home />
        <Download />
      </div>
      <hr />
    </div>
  );
}
