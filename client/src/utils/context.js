import { createContext, useState } from "react";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [catgroups, setCatgroups] = useState();
  const [products, setProducts] = useState();

  return (
    <Context.Provider
      value={{ catgroups, setCatgroups, products, setProducts }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
