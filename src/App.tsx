import { Routes, Route } from "react-router-dom";
import FormDatosClientes from "./Components/Formularios/FormDatosClientes";
import MainPage from "./MainPage";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";







function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <Route path="/" Component={MainPage}/> */}
        <Route path="/" Component={MainPage}/>
        {/* <Route path="/" Component={FormDatosClientes}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
