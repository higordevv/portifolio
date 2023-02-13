import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Loading from "./components/feed/loading";
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));
const Projects = React.lazy(() => import("./pages/Projects"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <React.Suspense fallback={<Loading />}>
                <Projects />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loading />}>
                <NoMatch />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
