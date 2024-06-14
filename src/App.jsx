import { Routes, Route, BrowserRouter } from "react-router-dom";

import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
import SignInForm from "./auth/SignInForm";
import Dashboard from "./Pages/Dashboard";
import Upload from "./Pages/Upload";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<SignInForm />} />
        </Route>

        <Route path="/" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
