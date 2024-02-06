import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { menuLinks } from '../../model/data';
import { useGlobalContext } from '../globalContext/AppContext';
import './navbar.css';

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  const { pageId, setPageId } = useGlobalContext();
  const currentItem = menuLinks.find((item) => item.id === pageId)
  const myRef = useRef(null)



  const handleMouseEvent = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }

  }

  return <nav onMouseOver={handleMouseEvent}>
    <div className="nav-header" >
      <h2 className='logo'>sea<span>Horse</span></h2>
      <button className='toggle-btn' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <FaBars />
      </button>
      <div className="nav-center">
        <div className='nav-links' >
          {
            menuLinks.map((link) => {
              const { id, menu } = link;
              return <button key={id} className='nav-link' onMouseOver={() => setPageId(id)} >{menu}</button>
            })
          }
        </div>
      </div>
    </div>
  </nav >
}
export default Navbar;