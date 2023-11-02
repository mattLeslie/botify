import { Routes, Route} from "react-router-dom";

function App() {
  return (      
    <main>
      <Routes>
          <Route path="/" element={<button onClick={()=>{console.log("test")}}>click me!</button>} />
      </Routes>
    </main>
  );
}

export default App;