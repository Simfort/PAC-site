import "./App.css";
import Contract from "./components/Contract";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoHistory from "./components/InfoHistory";
import LevelAndProfile from "./components/LevelAndProfile";
import License from "./components/License";
import Objects from "./components/Objects/Objects";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div>
      <Header />
      <InfoHistory />
      <LevelAndProfile />
      <Contract />
      <License />
      <Objects />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
