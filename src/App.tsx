import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import SigninPage from "./Pages/SigninPage"
import SignupPage from "./Pages/SignupPage";
import MainLayout from "./Layouts/MainLayout";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import VerificationPage from "./Pages/VerificationPage";
import DashBoard from "./Pages/DashBoard";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;