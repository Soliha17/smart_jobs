import BuildResume from "../pages/build-resume/BuildResume";
import CompaniesFull from "../pages/companies-full/CompaniesFull";
import Companies from "../pages/companies/Companies";
import Home from "../pages/home/Home";
import Vacancies from "../pages/vacancies/Vacancies";
import VacancyFull from "../pages/vacancy-full/VacancyFull";

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
];
