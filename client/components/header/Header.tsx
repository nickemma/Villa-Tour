import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import store, { storeType } from "../../redux/configureStore";
import { useRouter } from "next/router";
import { logout } from "../../redux/actions/user";
import { toast } from "react-toastify";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

const data = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Dashboard",
    route: "/dashboard",
    protected: true,
  },
  {
    name: "Create",
    route: "/tours/create",
    protected: true,
  },
];

const Header = () => {
  const currentUser = useSelector((store: storeType) => store.currentUser);
  const router = useRouter();

  const handleSession = () => {
    if (!currentUser.user) {
      router.push("/login");
      return;
    }
    store.dispatch(logout());
    toast.success("Logged out successfully");
  };

  const protectRoute = (link: any) => {
    return !link.protected || currentUser.user ? link.route : "/login";
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <span>Villa</span>
          <span>Tour</span>
        </div>
        <ul className="nav_links">
          {data.map((link, index) => (
            <li
              key={index}
              className={`nav_item ${
                link.route === router.pathname ? "active" : ""
              }`}
            >
              <Link href={protectRoute(link)}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {currentUser.user ? (
          <div className="nav_dropdown">
            <div className="avatar">
              <Image
                src={currentUser.user.user.avatar}
                width={50}
                height={50}
                alt="avatar"
              />
            </div>
            <RiArrowDropDownLine className="nav_dropdown__toggle" />
            <div className="nav_dropdown__container">
              <h4>Hello <span>{currentUser.user.user.name}</span></h4>
              <br />
              <ul className="mobile_nav_links">
                {data.map((link, index) => (
                  <li
                    key={index}
                    className={`nav_item ${
                      link.route === router.pathname ? "active" : ""
                    }`}
                  >
                    <Link href={protectRoute(link)}>{link.name}</Link>
                  </li>
                ))}
              </ul>
              <button onClick={handleSession}>Logout</button>
            </div>
          </div>
        ) : (
          <ul className="nav_auth">
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <hr />
            <li>
              <Link href={"/register"}>Join</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
