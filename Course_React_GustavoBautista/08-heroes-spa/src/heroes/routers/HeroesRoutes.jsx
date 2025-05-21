import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/Dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero" element={<HeroPage/>} />
          //comodin para cuando no haya ninguna referencia de una pagina
          <Route path="/*" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
