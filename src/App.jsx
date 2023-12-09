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
import Courses from "./pages/Courses/Courses";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import CourseForm from "./pages/CourseForm/CourseForm";
import Auth from "./pages/Auth/Auth";
import SpisokChlenov from "./pages/reestr/SpisokChlenov/SpisokChlenov";
import SLPS from "./pages/reestr/SLPS/SLPS";
import SOK from "./pages/reestr/SOK/SOK";
import SOIP from "./pages/reestr/SOIP/SOIP";
import NPA from "./pages/NPA/NPA";
import Organs from "./pages/Organs/Organs";
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseInfo />} />
          <Route path="/course/form" element={<CourseForm />} />
          <Route path="/reestr/spisok-chlenov" element={<SpisokChlenov/>} />
          <Route path="/reestr/slps" element={<SLPS/>} />
          <Route path="/reestr/sok" element={<SOK/>} />
          <Route path="/reestr/soip" element={<SOIP/>} />
          <Route path="/npa" element={<NPA/>} />
          <Route path="/organs" element={<Organs/>} />
          <Route path="/auth/" element={<Auth />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

const Hello2 = () => {
  return <h1>Hello</h1>;
};
