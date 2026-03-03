import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import DataScience from '../pages/DataScience';
import ElectronicSystems from '../pages/ElectronicSystems';
import Diploma from '../pages/Diploma';
import Academics from '../pages/Academics';
import Admissions from '../pages/Admissions';
import Resources from '../pages/Resources';
import StudentLife from '../pages/StudentLife';
import Events from '../pages/Events';
import AboutIITM from '../pages/AboutIITM';
import Partnerships from '../pages/Partnerships';
import FAQ from '../pages/FAQ';
import ESAcademics from '../pages/es/ESAcademics';
import ESAdmissions from '../pages/es/ESAdmissions';
import ESResources from '../pages/es/ESResources';
import ESStudentLife from '../pages/es/ESStudentLife';
import ESTestimonials from '../pages/es/ESTestimonials';
import ESEvents from '../pages/es/ESEvents';
import ESFAQ from '../pages/es/ESFAQ';
import ESAbout from '../pages/es/ESAbout';
import DiplomaAcademics from '../pages/diploma/DiplomaAcademics';
import DiplomaAdmissions from '../pages/diploma/DiplomaAdmissions';
import DiplomaAbout from '../pages/diploma/DiplomaAbout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'ds', element: <DataScience /> },
      { path: 'ds/academics', element: <Academics /> },
      { path: 'ds/admissions', element: <Admissions /> },
      { path: 'ds/resources', element: <Resources /> },
      { path: 'ds/student-life', element: <StudentLife /> },
      { path: 'ds/events', element: <Events /> },
      { path: 'ds/about', element: <AboutIITM /> },
      { path: 'ds/partnerships', element: <Partnerships /> },
      { path: 'ds/faq', element: <FAQ /> },
      { path: 'es', element: <ElectronicSystems /> },
      { path: 'es/academics', element: <ESAcademics /> },
      { path: 'es/admissions', element: <ESAdmissions /> },
      { path: 'es/resources', element: <ESResources /> },
      { path: 'es/student-life', element: <ESStudentLife /> },
      { path: 'es/testimonials', element: <ESTestimonials /> },
      { path: 'es/events', element: <ESEvents /> },
      { path: 'es/faq', element: <ESFAQ /> },
      { path: 'es/about', element: <ESAbout /> },
      { path: 'diploma', element: <Diploma /> },
      { path: 'diploma/academics', element: <DiplomaAcademics /> },
      { path: 'diploma/admissions', element: <DiplomaAdmissions /> },
      { path: 'diploma/about', element: <DiplomaAbout /> },
    ],
  },
]);