import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentOverviewPage from "./pages/StudentOverviewPage";
import AdminLandingPage from "./AdminLook/AdminLandingPage";
import TeacherOverviewPage from "./pages/TeacherOverviewPage";
import SaffOverviewPage from "./pages/SaffOverviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={<AdminLandingPage />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="student" element={<StudentOverviewPage />} />
          <Route path="teachers" element={<TeacherOverviewPage />} />
          <Route path="staff" element={<SaffOverviewPage />} />
        </Route>

        <Route path="*" element={<h1>Error Wrong URL</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
