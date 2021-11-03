import { Sidebar } from "./components/sidebar/sidebar";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./pages/home/home";
import Solution from "./pages/solution/solution";
import TeamaAndSolution from "./pages/team-and-solution/team-and-solution";
import Background from "./pages/background/background";
// import Accelerate from "./pages/accelerate/accelerate";
import WowFactor from "./pages/wow-factor/wow-factor";
import './components/sidebar/sidebar.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Route exact path="/" component={Home} />
        <Route exact path="/chargeback" component={Home} />
        <Route exact path="/teams-and-solution" component={TeamaAndSolution} />
        <Route exact path="/background" component={Background} />
        <Route exact path="/solution" component={Solution} />
        {/* <Route exact path="/accelerate" component={Accelerate} /> */}
        <Route exact path="/wow-factor" component={WowFactor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
