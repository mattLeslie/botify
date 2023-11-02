import { Routes, Route} from "react-router-dom";
import AuthorizationButton from "../components/AuthButton";

function App() {
  
  return (      
    <main>
      <Routes>
          <Route path="/" element={<AuthorizationButton/>} />
      </Routes>
    </main>
  );
}

export default App;