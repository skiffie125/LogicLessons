import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import Unit1 from './components/AllLessons/Unit1/Unit1.jsx';
import Lesson1_1 from './components/AllLessons/Unit1/Lesson1-1.jsx';
import Lesson1_1_1 from './components/AllLessons/Unit1/Lesson1-1-1.jsx';
import Lesson1_1_2 from './components/AllLessons/Unit1/Lesson1-1-2.jsx';
import Lesson1_1_3 from './components/AllLessons/Unit1/Lesson1-1-3.jsx';
import Lesson1_2 from './components/AllLessons/Unit1/Lesson1-2.jsx';
import Lesson1_2_1 from './components/AllLessons/Unit1/Lesson1-2-1.jsx';
import Lesson1_2_2 from './components/AllLessons/Unit1/Lesson1-2-2.jsx';
import Lesson1_2_3 from './components/AllLessons/Unit1/Lesson1-2-3.jsx';
import Unit2 from './components/AllLessons/Unit1/Unit2.jsx';
import Lesson2_1 from './components/AllLessons/Unit1/Lesson2-1.jsx';
import Lesson2_2 from './components/AllLessons/Unit1/Lesson2-2.jsx';
import Lesson2_3 from './components/AllLessons/Unit1/Lesson2-3.jsx';
import Lesson2_4 from './components/AllLessons/Unit1/Lesson2-4.jsx';
import Unit3 from './components/AllLessons/Unit1/Unit3.jsx';
import NotFoundPage from './components/ErrorPages/NotFoundPage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: "/unit1", element: <Unit1 /> },
      { path: "/l11", element: <Lesson1_1 /> },
      { path: "/l111", element: <Lesson1_1_1 /> },
      { path: "/l112", element: <Lesson1_1_2 /> },
      { path: "/l113", element: <Lesson1_1_3 /> },
      { path: "/l12", element: <Lesson1_2 /> },
      { path: "/l121", element: <Lesson1_2_1 /> },
      { path: "/l122", element: <Lesson1_2_2 /> },
      { path: "/l123", element: <Lesson1_2_3 /> },
      { path: "/unit2", element: <Unit2/> },
      { path: "/l21", element: <Lesson2_1 /> },
      { path: "/l22", element: <Lesson2_2 /> },
      { path: "/l23", element: <Lesson2_3 /> },
      { path: "/l24", element: <Lesson2_4 /> },
      { path: "/unit3", element: <Unit3/> },
      { path: "*", element: <NotFoundPage /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
