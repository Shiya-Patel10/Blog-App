import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./Pages/BlogDetails";
import BlogList from "./Pages/BlogList";
import Layout from "./componets/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
