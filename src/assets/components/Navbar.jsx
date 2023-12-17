import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const listItems = ["Home", "About", "Contact", "Blog", "Careers"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function displayLists() {
    return listItems.map((item, index) => (
      <li key={index}>
        <a
          href="#"
          className="text-grayishBlue hover:text-darkBlue hover:underline underline-offset-[16px] decoration-4 decoration-limeGreen"
        >
          {item}
        </a>
      </li>
    ));
  }
  return (
    <nav>
      <div className="container mx-auto bg-white flex items-center justify-between p-6 max-w-[1440px]">
        <img src={Logo} alt="" />
        <ul className="hidden space-x-6 md:flex"> {displayLists()} </ul>
        <button className="btn hidden md:block">Request Invite</button>

        {/* Hamburger & Close Icons */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <img src={CloseIcon} /> : <img src={Hamburger} />}

          {/* Mobile Menu */}
          <ul
            className={`absolute bg-white p-6 ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col items-center space-y-6 top-[180%] left-5 right-5 drop-shadow-lg font-medium text-darkBlue`}
          >
            {displayLists()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
