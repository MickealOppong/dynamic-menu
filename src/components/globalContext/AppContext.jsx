import { createContext, useContext, useState } from "react";
const MyContext = createContext(null);
export const useGlobalContext = () => useContext(MyContext)

const AppContext = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [pageId, setPageId] = useState(null);

  return <MyContext.Provider value={
    {
      isSidebarOpen,
      setIsSidebarOpen,
      pageId,
      setPageId
    }
  }>
    {children}
  </MyContext.Provider>
}
export default AppContext;