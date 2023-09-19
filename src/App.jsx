import "./App.css";
// import DaisyNav from "./component/DaisyNav/DaisyNav";
// import Nav2 from "./component/Nav2/Nav2";
import NavBar from "./component/Navbar/NavBar";
import PriceOptions from "./component/PriceOptions/PriceOptions";
import LineCharts from "./component/LineChart/LineCharts/LineCharts";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
    </>
  );
}

export default App;
