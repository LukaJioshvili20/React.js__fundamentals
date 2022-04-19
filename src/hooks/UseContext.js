import React, { useState, createContext } from "react";
import Login from "../components/Login"
import User from "../components/User"


// Login,User components
export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;