'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'; 
import { Bell,EnvelopeAt,PersonFillGear} from 'react-bootstrap-icons';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <button className={styles.hamburger} onClick={toggleSidebar}>
            ☰
          </button>
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.icon}> <Bell size={24} className="text-primary" /><span className={styles.badge}>2</span></div>
          <div className={styles.icon}> <EnvelopeAt size={23} className="text-primary"/><span className={styles.badge}>3</span></div>
          <div><PersonFillGear size={30} className="text-primary"/></div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sidebarRef={sidebarRef} />
    </>
  );
};

export default Navbar; 