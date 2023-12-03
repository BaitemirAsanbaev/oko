import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Layout>
        <Routes>
        <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Layout>
    </>
  );
}

export default App;

const Hello2 = () => {
  return <h1>Hello</h1>;
};
