import "./App.css";
import Contract from "./components/Contract";
import Header from "./components/Header";
import InfoHistory from "./components/InfoHistory";
import LevelAndProfile from "./components/LevelAndProfile";

function App() {
  return (
    <div>
      <Header />
      <InfoHistory />
      <LevelAndProfile />
      <Contract />
    </div>
  );
}

export default App;
