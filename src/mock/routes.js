// import JobSeekerModal from "../components/molecules/modal/JobSeeker";
// import Login from "../components/molecules/modal/Login";
import BuildResume from "../pages/build-resume/BuildResume";
import Blog from "../pages/blog/Blog";
import CompaniesFull from "../pages/companies-full/CompaniesFull";
import Companies from "../pages/companies/Companies";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Vacancies from "../pages/vacancies/Vacancies";
import VacancyFull from "../pages/vacancy-full/VacancyFull";
import BlogFull from "../pages/blog-full/BlogFull";
import About from "../pages/about/About";
import TakeTest from "../pages/take-test/TakeTest";
import ResumePromo from "../pages/resume-promo/ResumePromo";
import ResumeBuilder from "../pages/resume-builder/ResumeBuilder";

export const routesDatas = [
  {
    id: 1,
    title: "Home Page",
    path: "/",
    element: Home,
  },
  {
    id: 2,
    title: "Vacancy Page",
    path: "/vacancy",
    element: Vacancies,
  },
  {
    id: 3,
    title: "Vacancy Full Page",
    path: "/full",
    element: VacancyFull,
  },
  {
    id: 4,
    title: "Companies Page",
    path: "/companies",
    element: Companies,
  },
  {
    id: 5,
    title: "Companies Full Page",
    path: "/companiesFull",
    element: CompaniesFull,
  },
  {
    id: 6,
    title: "Resume Builder Page",
    path: "/resume",
    element: BuildResume,
  },
  {
    id: 7,
    title: "Profile Page",
    path: "/profile",
    element: Profile,
  },
  {
    id: 8,
    title: "Blog Page",
    path: "/blog",
    element: Blog,
  },
  {
    id: 9,
    title: "Blog Full Page",
    path: "/blogFull",
    element: BlogFull,
  },
  {
    id: 10,
    title: "About Us Page",
    path: "/about",
    element: About,
  },
  {
    id: 11,
    title: "Take Test Page",
    path: "/test",
    element: TakeTest,
  },
  {
    id: 12,
    title: " Page",
    path: "/builder",
    element: ResumePromo,
  },
  {
    id: 13,
    title: "Resume Builder Page",
    path: "/build",
    element: ResumeBuilder,
  },
];
