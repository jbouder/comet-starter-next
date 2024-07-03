"use client";
import { Banner, Icon, Search } from "@metrostar/comet-uswds";
import { APP_TITLE } from "../../utils/constants";
import navigation from "@uswds/uswds/js/usa-header";
import React, { SyntheticEvent, useEffect, useState } from "react";
import useAuth from "../../hooks/use-auth";
import Link from "next/link";

export const Header = (): React.ReactElement => {
  const [showMenu, setShowMenu] = useState(false);

  const { isSignedIn, signOut } = useAuth();

  const handleMenuClick = (): void => {
    window.scrollTo({ top: 0 });
    setShowMenu(!showMenu);
  };

  // Ensure navigation JS is loaded
  useEffect(() => {
    const bodyElement = document.body;
    navigation.on(bodyElement);

    // Ensure cleanup after the effect
    return () => {
      navigation.off(bodyElement);
    };
  });

  useEffect(() => {
    const ref = document.body.style;
    showMenu ? (ref.overflow = "hidden") : (ref.overflow = "visible");
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const handleAuth = (event: SyntheticEvent): void => {
    event.preventDefault();
    if (isSignedIn) {
      signOut();
      // navigate("/");
    } else {
      // navigate("/signin");
    }
  };

  return (
    <>
      <a className="usa-skipnav " href="#mainSection">
        Skip to main content
      </a>
      <Banner id="banner" />
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="-logo">
              <em className="usa-logo__text">
                <Link id="logo-link" href="/">
                  {APP_TITLE}
                </Link>
              </em>
            </div>
            <button
              type="button"
              className="usa-menu-btn"
              onClick={handleMenuClick}
            >
              Menu
            </button>
          </div>
          <nav className="usa-nav">
            <button type="button" className="usa-nav__close">
              <Icon id="menu-icon" type="close" />
            </button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                <Link
                  id="home-link"
                  href="/"
                  className={`usa-nav__link ${
                    location.pathname === "/" ? "usa-current" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              {isSignedIn && (
                <li className="usa-nav__primary-item">
                  <Link
                    id="dashboard-link"
                    href="/dashboard"
                    className={`usa-nav__link ${
                      location.pathname === "/dashboard" ? "usa-current" : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="usa-nav__primary-item">
                <Link
                  id="auth-link"
                  href="/signin"
                  className={`usa-nav__link ${
                    location.pathname === "/signin" ? "usa-current" : ""
                  }`}
                  onClick={handleAuth}
                >
                  {isSignedIn ? "Sign Out" : "Sign In"}
                </Link>
              </li>
            </ul>
            <section aria-label="Search component">
              <Search id="search" type="small" placeholder="Search our Site" />
            </section>
          </nav>
        </div>
      </header>
    </>
  );
};
