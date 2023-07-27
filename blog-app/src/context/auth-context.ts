import React, { SetStateAction } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (t: SetStateAction<boolean>) => {}, // Dispatch<SetStateAction<boolean>>
});

export default AuthContext;
