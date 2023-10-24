import React, { useState } from "react";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../../assets/Logo.png";
import { Button } from "../../components";
import { useSidebarContext } from "../../contexts/SidebarContext";

const Header = () => {
  const [showFullWidthSearh, setShowFullWidthSearh] = useState(false);
  const { toggle } = useSidebarContext();

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div
        className={`items-center flex-shrink-0 gap-2 ${
          showFullWidthSearh ? "hidden" : "flex"
        }`}
      >
        <Button size={"icon"} variant="ghost" onClick={toggle}>
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <div
        className={`md:flex items-center justify-center flex-grow relative ${
          showFullWidthSearh ? "flex" : "hidden"
        }`}
      >
        <Button
          size={"icon"}
          variant="ghost"
          className={`absolute top-0 left-0 ${!showFullWidthSearh && "hidden"}`}
          onClick={() => setShowFullWidthSearh(false)}
        >
          <ArrowLeft />
        </Button>
        <form className="flex justify-center items-center flex-grow max-w-[250px] sm:max-w-[350px] lg:max-w-[500px] me-3">
          <input
            type="search"
            placeholder="Search"
            className="flex-grow py-2 border rounded-l-full shadow-inner outline-none border-secondary-border shadow-secondary ps-3 pe-3 focus:border-blue-500"
          />
          <Button className="border border-l-0 rounded-r-full border-secondary-border">
            <Search />
          </Button>
        </form>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </div>
      <div
        className={`items-center flex-shrink-0 gap-2 ${
          showFullWidthSearh ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => {
            setShowFullWidthSearh(true);
          }}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost" className="hidden sm:block">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost" className="hidden sm:block">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost" className="hidden sm:block">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Header;
