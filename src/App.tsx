import { Route, Routes, useLocation } from "react-router";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Menu } from "./components/Menu";

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isAuthPage && (
        <div className="font-rubik">
          <div className="flex">
            <Menu />
            <div className="w-full h-screen bg-dark"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
