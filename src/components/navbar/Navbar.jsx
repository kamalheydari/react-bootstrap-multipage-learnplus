import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context";

import "./navbar.css";

const Navbar = () => {
  const {
    toggleSubmenu,
    openSidebar,
    isSidebar,
    closeSidebar,
    isSubmenu,
  } = useGlobalContext();

  const submenuRef = useRef(null);
  const submenuContainerRef = useRef(null);

  useEffect(() => {
    const submenuHeight = submenuRef.current.getBoundingClientRect().height;

    if (isSubmenu) {
      submenuContainerRef.current.style.height = `${submenuHeight}px`;
    } else {
      submenuContainerRef.current.style.height = "0px";
    }
  }, [isSubmenu]);

  return (
    <header className="header py-2">
      <div
        className={`header-backdrop ${isSidebar ? "active" : null}`}
        onClick={closeSidebar}
      ></div>
      <nav className="navbar p-0">
        <div className="container d-flex justify-content-between ">
          <div className="navbar-brand">
            <Link to="/" className=" text-uppercase fs-3 fw-bold">
              <span>lrn</span>plus
            </Link>
          </div>
          <button
            onClick={openSidebar}
            type="button"
            className="navbar-togglre d-lg-none fs-3"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div
            className={`navbar-nav-container py-3 py-lg-0 ${
              isSidebar ? "active" : null
            } `}
          >
            <button
              className="header-close-btn d-lg-none theme-bg fs-4 rounded-1 mx-3 mx-lg-0 mb-3 mb-lg-0 "
              onClick={closeSidebar}
              type="button"
            >
              <i className="fa fa-times"></i>
            </button>
            <ul className="navbar-nav d-flex flex-lg-row flex-column align-lg-items-center ">
              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link  px-3 px-lg-0"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5 ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link  px-3 px-lg-0"
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item me-5 ">
                <a onClick={toggleSubmenu} className=" px-3 px-lg-0">
                  User
                  <i
                    className={`fas fa-chevron-down fs-6 ms-2 ms-lg-1 ${
                      isSubmenu ? "rotate" : null
                    } `}
                  ></i>
                </a>
                <div className="sub-menu-container" ref={submenuContainerRef}>
                  <ul className="sub-menu rounded-2 px-lg-2" ref={submenuRef}>
                    <li className="nav-item">
                      <Link
                        onClick={closeSidebar}
                        to="/login"
                        className="nav-link px-5 px-lg-0 "
                      >
                        Log In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        onClick={closeSidebar}
                        to="signup"
                        className="nav-link px-5 px-lg-0"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item ">
                <Link
                  onClick={closeSidebar}
                  className="nav-link px-3 px-lg-0"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
