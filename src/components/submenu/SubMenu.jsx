import { useRef } from 'react';
import { menuLinks } from '../../model/data';
import { useGlobalContext } from '../globalContext/AppContext';
import '../navbar/navbar.css';

const SubMenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentItem = menuLinks.find((item) => item.id === pageId)
  const myRef = useRef(null)

  const handleMouseLeave = (e) => {
    const { left, right, bottom } = myRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }

  }


  return <div className={currentItem ? "submenu show-submenu" : "submenu"} onMouseLeave={handleMouseLeave} ref={myRef}>
    <h2>{currentItem?.menu}</h2>
    <div className='submenu-content' style={{ gridTemplateColumns: currentItem?.items.length > 2 ? "1fr 1fr" : "1fr" }}>
      {
        currentItem?.items.map(sub => {
          const { id, label, url, icon } = sub;
          return <a key={id} href={url}>{icon}{label}</a>
        })
      }
    </div>
  </div >
}
export default SubMenu;