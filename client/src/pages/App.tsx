import { Routes, Route} from "react-router-dom";
import AuthorizationButton from "../components/AuthButton";
import Dashboard from "./Dashboard";

function App() {
  
  return (      
    <main>
      <Routes>
          <Route path="/" element={<AuthorizationButton/>} />
          <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </main>
  );
}

export default App;