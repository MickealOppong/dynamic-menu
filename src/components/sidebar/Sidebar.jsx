import { FaTimes } from "react-icons/fa";
import { menuLinks } from '../../model/data';
import { useGlobalContext } from "../globalContext/AppContext";
import './sidebar.css';



const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return <aside className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"} >
    <div className="sidebar">
      {
        menuLinks.map((item) => {
          const { id, menu, items } = item;
          return <article key={id} className="title">
            <h2 key={id}>{menu}</h2>
            <div className="items">
              {
                items.map((item) => {
                  const { id, label, icon, url } = item;
                  return <a key={id} href={url}>{icon}{label}</a>
                })
              }
            </div>
          </article>
        })
      }
    </div>
    <button className="close-btn" onClick={() => setIsSidebarOpen(false)}><FaTimes /></button>
  </aside>
}
export default Sidebar;