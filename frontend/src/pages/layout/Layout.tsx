import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                            <a href="https://tcs.com" target={"_blank"} title="Tata Consultancy Services">
                                <img
                                    src='https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg'
                                    alt="TCS logo"
                                />
                            </a>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>TCS Azure Open AI - Ethics & Policy | Sample</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
