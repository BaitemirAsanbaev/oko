import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="h" element={<Hello2 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

const Hello2 = () => {
  return <h1>Hello</h1>;
};
