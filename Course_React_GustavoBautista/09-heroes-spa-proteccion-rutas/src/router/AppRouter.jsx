
import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../ui";
import { HeroesRoutes } from "../heroes";
import { Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
     
      <Routes>
        <Route path="/login" element={
          <PublicRouter>
            <LoginPage/>
          </PublicRouter>
        }/>

        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRoutes/>
          </PrivateRouter>
        }/>

        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
        
      </Routes>
    </>
  );
};
