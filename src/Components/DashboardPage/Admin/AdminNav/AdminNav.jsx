import React, { useState } from 'react';
import { Outlet, NavLink, Link } from "react-router-dom";
import useAuth from '../../../SignUpSignInPage/UseAuthHook/useAuth';
import styles from './AdminNav.module.css'

const AdminNav = () => {
    const { isLoggedIn, SignOut } = useAuth()
    const [navbarColor, setNavbarColor] = useState(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setNavbarColor(true)
        } else {
            setNavbarColor(false)
        }
    }
    window.addEventListener('scroll', changeNavbarColor)
    return (
        <div className='pt-3'>
            <nav className={navbarColor ? `navbar navbar-expand-lg fixed-top navbar-light bg-light ${styles.navStyle}` : "navbar navbar-expand-lg navbar-light"}>
                <div className="container">
                    <Link className="navbar-brand fw-bold " to="">Admin</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/'>Home</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/manageBooking'>All Booking</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/managePackage'>Manage Packages</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/manageBlogs'>Manage Blogs</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/manageEvents'>Upcoming Events</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/manageMessage'>Messages</NavLink>
                            </li>
                            <li className={`nav-item ${styles.listItem}`}>
                                <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/manageAdmins'>Admin</NavLink>
                            </li>
                        </ul>
                        <div>
                            {
                                isLoggedIn.emailVerified === true ? <button onClick={SignOut} className={`btn ${styles.outBtn}`} >SignOut</button> : <NavLink to="/signin" className={`btn ${styles.inBtn}`} >SignIn</NavLink>
                            }


                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default AdminNav;