import { useEffect, useState } from "react";
import "./App.css";
import { jwtDecode } from "jwt-decode";
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
    <div className="flex items-center justify-center h-full ">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        culpa.
        {/* <Login /> */}
      </p>

      <div id="loginBtn"></div>
    </div>
  );
}







export default App;
