import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { useRouter } from 'next/navigation';
import { HouseCheck,Person,Folder,Save, ArrowBarRight} from 'react-bootstrap-icons';

const Sidebar = ({ isOpen, toggleSidebar, sidebarRef }) => {
  const router = useRouter();
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <HouseCheck size={20} className="text-primary" />,
      path: '/pages/dashboard',
      subItems: []
    },
    {
      id: 'personal',
      label: 'Personal',
      icon: <Person size={20} className="text-primary" />,
      path: '#',
      subItems: [
        { id: 'learning', label: 'Learning', path: '/learn' },
        { id: 'favorite', label: 'Favorite', path: '/favorites' }
      ]
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <Folder size={20} className="text-primary" />,
      path: '#',
      subItems: [
        { id: 'current', label: 'Current', path: '/current' },
        { id: 'archived', label: 'Archived', path: '/archived' }
      ]
    },
    {
      id: 'saved',
      label: 'Saved',
      icon: <Save size={20} className="text-primary" />,
      path: '/saved',
      subItems: []
    },
    {
      id: 'logout',
      label: 'Logout',
      icon: <ArrowBarRight size={20} className="text-primary" />,
      path: '/pages/loginPage',
      subItems: []
    }
  ];

  const [activeMenu, setActiveMenu] = useState('');
  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    const currentPath = router.pathname;
    const activeItem = menuItems.find(item => 
      item.path === currentPath || 
      item.subItems.some(sub => sub.path === currentPath)
    );
    
    if (activeItem) {
      setActiveMenu(activeItem.id);
      if (activeItem.subItems.some(sub => sub.path === currentPath)) {
        setOpenMenus(prev => ({ ...prev, [activeItem.id]: true }));
      }
    }
  }, [router.pathname]);

  const toggleMenu = (menuId) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleNavigation = (path, menuId) => {
    setActiveMenu(menuId);
    router.push(path);
    if (isOpen) toggleSidebar(); 
  };

  const isMenuOpen = (menuId) => openMenus[menuId] || false;
  const isSubItemActive = (item) => item.subItems?.some(sub => sub.id === activeMenu);

  return (
    <div ref={sidebarRef} className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <h5 className={styles.title}>Menu</h5>
        <button className={styles.closeBtn} onClick={toggleSidebar}>
          &times;
        </button>
      </div>

      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li 
          key={item.id}
          className={`${styles.menuGroup} ${
            item.subItems ? '' : styles.menuItem
          } ${
            (item.id === activeMenu || isSubItemActive(item)) ? styles.activeGroup : ''
          }`}
        >
            {item.subItems.length > 0 ? (
              <>
                <div 
                  className={`${styles.groupHeader} ${isMenuOpen(item.id) ? styles.open : ''}`}
                  onClick={() => {
                    toggleMenu(item.id);
                  }}
                >
                  <span className={styles.menuIcon}>{item.icon}</span>
                  <span className={styles.menuText}>{item.label}</span>
                  <span className={styles.chevron}>
                    {isMenuOpen(item.id) ? '▾' : '▸'}
                  </span>
                </div>
                
                {isMenuOpen(item.id) && (
                  <ul className={styles.subMenu}>
                    {item.subItems.map((subItem) => (
                      <li 
                        key={subItem.id}
                        className={`${styles.subMenuItem} ${
                          subItem.id === activeMenu ? styles.active : ''
                        }`}
                        onClick={() => handleNavigation(subItem.path, subItem.id)}
                      >
                        <span>{subItem.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <div 
                className={styles.menuContent}
                onClick={() => handleNavigation(item.path, item.id)}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                <span className={styles.menuText}>{item.label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;