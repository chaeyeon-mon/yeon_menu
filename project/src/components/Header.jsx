import React, { useState } from 'react';
import './Header.css'; // CSS 파일 import

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    {
      title: '회사소개',
      submenus: ['인사말', '홍보영상']
    },
    {
      title: '서비스',
      submenus: ['제품 소개', '체험']
    },
    {
      title: '문의',
      submenus: ['FAQ', 'Q&A', '도입문의']
    }
  ];

  return (
    <div 
      className="header-wrapper"
      onMouseEnter={() => setMenuVisible(true)}
      onMouseLeave={() => setMenuVisible(false)}
    >
      <header className="header-container">
        <a href="/" className="logo">눈봄</a>
        <nav>
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.title} className="nav-item">
                <a href="#" className="nav-link">{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-icons">
          <div className="icon">LP</div>
          <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </div>
      </header>

      <div className={`mega-menu-container ${isMenuVisible ? 'visible' : ''}`}>
        <div className="mega-menu-content">
          <div className="mega-menu-columns">
            {menuItems.map((item) => (
              <div key={item.title} className="mega-menu-column">
                <a href="#" className="mega-menu-category">{item.title}</a>
                <ul className="mega-menu-list">
                  {item.submenus.map((submenu) => (
                    <li key={submenu} className="mega-menu-list-item">
                      <a href="#" className="mega-menu-link">{submenu}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;