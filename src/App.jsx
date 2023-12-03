import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Members from "./pages/Members/Members";
import News from "./pages/News/News";
import FullNews from "./pages/FullNews/FullNews";
import Vacancies from "./pages/Vacancies/Vacancies";
import VacancyInfo from "./pages/VacancyInfo/VacancyInfo";
import VacancyForm from "./pages/VacancyForm/VacancyForm";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/members/:id" element={<Members />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<FullNews />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancy/:id" element={<VacancyInfo />} />
          <Route path="/vacancy/form" element={<VacancyForm />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

const Hello2 = () => {
  return <h1>Hello</h1>;
};
