import { useState } from 'react';
import closeBtn from './assets/icon-menu-close.svg';
import dashboardPic from './assets/icon-menu.svg';
import logoPic from './assets/logo.svg';
import styles from './CSS/Header.module.css';

function Header() {
  const [pages, setPages] = useState(false);

  const togglePages = () => setPages(prev => !prev);
  const closePages = () => setPages(false);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <img src={logoPic} alt="logo" className={styles.logoImage} />

        {/* 🖥️ Desktop Navigation (shown on large screens) */}
        <nav className={styles.desktopNav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </nav>

        {/* 📱 Mobile dashboard icon */}
        <img
          src={dashboardPic}
          alt="menu"
          className={styles.dashboard}
          onClick={togglePages}
        />
      </div>

      {/* 📱 Mobile Dropdown */}
      {pages && (
        <nav className={styles.mobileNav}>
          <div className={styles.closeContainer}>
            <img
              src={closeBtn}
              alt="close menu"
              onClick={closePages}
              className={styles.closeBtn}
            />
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}



export default Header;
