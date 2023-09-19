import "./App.css";
// import DaisyNav from "./component/DaisyNav/DaisyNav";
// import Nav2 from "./component/Nav2/Nav2";
import NavBar from "./component/Navbar/NavBar";
import PriceOptions from "./component/PriceOptions/PriceOptions";
import LineCharts from "./component/LineChart/LineCharts/LineCharts";
import Phones from "./component/Phones/Phones";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
  );
}

export default App;
