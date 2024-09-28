import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="PortfoAI Logo"
            width={30}
            height={20}
          />
        </Link>
        <span className="logo-text">PortfoAI.</span>
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link href="/about">About Us</Link>
        <Link href="/why-us">Why Us?</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/journey">Journey</Link>
        <Link href="/help">Help</Link>
      </nav>
      <div className="nav-right flex space-x-4">
        <Link href="/signup" className="sign-up">
          Sign Up
        </Link>
        <Link href="/login" className="sign-in">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
