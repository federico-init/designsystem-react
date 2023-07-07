// import React hooks
import { useState } from "react";

// import style
import styles from "./Header.module.scss";

// import assets
import {
  FaChevronDown,
  FaHashnode,
  FaMagnifyingGlass,
  FaUser,
  FaBagShopping,
} from "react-icons/fa6";

const Header = () => {
  // mocks
  const menuItems = [
    {
      id: 1,
      label: "Home",
      items: [
        {
          id: 1,
          label: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
        },
        {
          id: 3,
          label: "Option 3",
        },
      ],
    },
    {
      id: 2,
      label: "Shop",
      items: [
        {
          id: 1,
          label: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
        },
        {
          id: 3,
          label: "Option 3",
        },
      ],
    },
    {
      id: 3,
      label: "Product",
      items: [
        {
          id: 1,
          label: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
        },
        {
          id: 3,
          label: "Option 3",
        },
      ],
    },
    {
      id: 4,
      label: "Pages",
      items: [
        {
          id: 1,
          label: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
        },
        {
          id: 3,
          label: "Option 3",
        },
      ],
    },
  ];

  // definisco uno state in cui salvo il riferimento al menu aperto
  const [openMenu, setOpenMenu] = useState(false);

  // definisco una funzione per la gestione dei menu che apro/chiudo
  const handleOpenMenu = (item) => {
    if (item === openMenu) setOpenMenu(false);
    else setOpenMenu(item);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`flex align-items-center justify-content-between`}>
          <div className={`${styles.icon} col-3`}>
            <FaHashnode />
          </div>
          <div className={`${styles.menu} col-6`}>
            <ul className={`${styles.menuItem} flex`}>
              {menuItems?.map((item) => (
                <li key={item?.id} onClick={() => handleOpenMenu(item?.id)}>
                  <div className={styles.menuItem__label}>
                    <span>{item?.label}</span>
                    {"  "}
                    <span>
                      <FaChevronDown />
                    </span>
                  </div>
                  <div
                    className={`${styles.menuItem__dropdown} ${
                      openMenu && openMenu === item?.id ? styles.open : ""
                    }`}
                  >
                    <ul>
                      {item?.items?.map((subItem) => (
                        <li key={subItem?.id}>
                          <span>{subItem?.label}</span>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.icon} col-3`}>
            <FaMagnifyingGlass />
            <FaUser />
            <FaBagShopping />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
