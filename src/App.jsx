import Hero from "./components/main/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import SubMenu from "./components/submenu/SubMenu";
import './index.css';
const App = () => {
  return <main>
    <Navbar />
    <Sidebar />
    <SubMenu />
    <Hero />
  </main>
}
export default App;