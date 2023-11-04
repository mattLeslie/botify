import { Routes, Route} from "react-router-dom";
import AuthorizationButton from "../components/AuthButton";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";

function App() {
  
  return (      
    <main>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </main>
  );
}

export default App;