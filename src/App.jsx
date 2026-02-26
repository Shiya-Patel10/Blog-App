import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./Pages/BlogDetails";
import BlogList from "./Pages/BlogList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
