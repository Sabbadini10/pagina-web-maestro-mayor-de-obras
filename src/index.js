import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesPlanos from "./pages/PagesPlanos";
import PagesHome from "./pages/PagesHome";
import PagesRenders from "./pages/PagesRenders";
import NoPage from "./pages/PagesNoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PagesHome />}/> 
          <Route path="/renders" exact element={<PagesRenders />} />
          <Route path="/planos" exact element={<PagesPlanos />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);