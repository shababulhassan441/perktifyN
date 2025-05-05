"use client"
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine logo source based on scroll position and whether it's the home page
  const logoSrc = isScrolled || !isHomePage ? "/logoblack.png" : "/logowhite.png";
  return (
    <nav
      className={`navbar fixed-top py-3 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      } transition-all `}
    >
      <div className="container-fluid custom-pl d-flex justify-content-between align-items-center ">
      <a href="/" >
        <img
          src={logoSrc}
          alt="Logo"
          className="navbar-brand header-logo logo  "
          style={{height:"90px", transition: "all 0.3s ease" }}
        />
      </a>
      </div>
    </nav>
  );
};

export default Header;
