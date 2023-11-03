import { Routes, Route} from "react-router-dom";
import AuthorizationButton from "../components/AuthButton";

function App() {

  const testFn = () =>{
    fetch('/test');
    console.log("success");
  }
  
  return (      
    <main>
      <Routes>
          <Route path="/" element={<AuthorizationButton/>} />
          <Route path="/test" element={<div>
            <button onClick={testFn}>click me!</button>
          </div>}/>
      </Routes>
    </main>
  );
}

export default App;