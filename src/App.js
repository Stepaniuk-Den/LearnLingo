import { Suspense, lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import "./App.css";
import Loader from "./components/Loader/Loader";
import Layout from "./pages/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
            <Route path="/teachers" element={<TeachersPage />}></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
