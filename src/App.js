import Home from "./Home";
import WaitingPage from "./WaitingPage";
import UploadPage from "./UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitingpage" element={<WaitingPage />} />
          <Route path="/uploadpage" element={<UploadPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
