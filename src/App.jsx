import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./Pages/BlogDetails";
import BlogList from "./Pages/BlogList";
import Layout from "./componets/layout";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark app" : "app"}>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
