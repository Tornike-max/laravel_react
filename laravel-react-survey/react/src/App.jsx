import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import SurveysPage from "./pages/SurveysPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import GuestLayout from "./layouts/GuestLayout"
import AuthLayout from "./layouts/AuthLayout"
import CreateSurvey from "./pages/CreateSurvey"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Navigate to={'/'} />} />
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/surveys" element={<SurveysPage />} />
          <Route path="/surveys/create" element={<CreateSurvey />} />
        </Route>


        <Route path="/" element={<GuestLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App