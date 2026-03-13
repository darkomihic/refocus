import { createContext, useContext, useState } from "react";

const NavbarContext = createContext(null);

export function NavbarProvider({ children }) {
  const [visible, setVisible] = useState(true);
  return (
    <NavbarContext.Provider value={{ visible, setVisible }}>
      {children}
    </NavbarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNavbar = () => useContext(NavbarContext);
