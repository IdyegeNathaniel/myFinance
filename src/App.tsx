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

const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/sign-in" element={ <MainLayout /> } >
      <Route path="/sign-in" element={ <SigninPage /> } />
      <Route path="/sign-up" element={ <SignupPage /> } />
      <Route path="*" element={ <NotFoundPage /> } />
    </Route>
  )
);
return <RouterProvider router={router} />;
};

export default App;