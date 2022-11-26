import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { UserProvider } from "./context/ContextUser";
import { ModalProvider } from "./context/ContextModal";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to={"/dashboard"} />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ModalProvider>
      </UserProvider>
    </div>
  );
}

export default App;
