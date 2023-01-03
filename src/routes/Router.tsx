import { Routes, Route } from "react-router-dom";
import { Suspense, lazy} from "react";

const Home = lazy(() => import("../pages/Home"));
const Display = lazy(() => import("../pages/Display"));

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path=":idComp" element={<Display />} />
      </Routes>
    </Suspense>
  )
}

export default Router;