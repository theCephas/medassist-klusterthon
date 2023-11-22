import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Home from "./pages/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/dasboard/Dashboard";

const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID;

function App() {
  const [users, setUsers] = useState({});
  //@ts-expect-error this is an auth type check
  const handleCallBackResponse = (response) => {
    console.log("Encoded jwt ID token:" + response.credential);
    const userObject = jwtDecode(response.credential);
    setUsers(userObject);
  };

  useEffect(() => {
    //@ts-expect-error this is an auth type check
    window.google.accounts.id.initialize({
      client_id: clientID,
      callback: handleCallBackResponse,
    });
    //@ts-expect-error this is an auth type check
    window.google.accounts.id.renderButton(
      document.getElementById("loginBtn"),
      {
        theme: "outline",
        size: "large",
      }
    );
    //@ts-expect-error this is an auth type check
    window.google.account?.id.prompt();
  }, []);
  console.log(users);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/sign-in" index element={<SignIn />} />
          <Route path="/sign-up" index element={<SignUp />} />

          <Route path="" element={<DashboardLayout />}>
            <Route path="/dashboard" index element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
      {/* <div id="loginBtn"></div> */}
    </Router>
  );
}

export default App;
