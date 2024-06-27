import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const AuthLayout = lazy(() => import("./auth/AuthLayout"));
const RootLayout = lazy(() => import("./root/RootLayout"));
const SignInForm = lazy(() => import("./auth/SignInForm"));
const Quran = lazy(() => import("./Pages/Quran"));
const EveningAdhdhkar = lazy(() => import("./Pages/EveningAdhdhkar"));
const MoringAdhdhkar = lazy(() => import("./Pages/MoringAdhdhkar"));
const SleepingAdhdhkar = lazy(() => import("./Pages/SleepingAdhdhkar"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <CircularProgress color="success" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<SignInForm />} />
          </Route>
          <Route path="/app" element={<RootLayout />}>
            <Route index element={<Quran />} />
            <Route path="eveningAdhdhkar" element={<EveningAdhdhkar />} />
            <Route path="moringAdhdhkar" element={<MoringAdhdhkar />} />
            <Route path="sleepingAdhdhkar" element={<SleepingAdhdhkar />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
