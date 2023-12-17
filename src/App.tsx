import { Routes, Route } from "react-router-dom";
import { Main } from "./Components/main";
import { Layout1 } from "./Components/layout1";
import { Layout2 } from "./Components/layout2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Main}/>
        <Route path="/view1" Component={Layout1}/>
        <Route path="/view2" Component={Layout2}/>
        
      </Routes>
    </div>
  );
}

export default App;
