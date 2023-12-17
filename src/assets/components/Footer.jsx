import Logo from "../images/logo-white.svg";
import Facebook from "../images/icon-facebook.svg";
import YouTube from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <div className="container mx-auto p-6 grid grid-cols-1 space-y-4 items-center justify-center md:grid-cols-4">
        <div className="flex-center space-y-4">
          <img src={Logo} alt="" />
          {/* Icons */}
          <div className="flex space-x-4">
            <img className="cursor-pointer" src={Facebook} />
            <img className="cursor-pointer" src={YouTube} />
            <img className="cursor-pointer" src={Twitter} />
            <img className="cursor-pointer" src={Pinterest} />
            <img className="cursor-pointer" src={Instagram} />
          </div>
        </div>
        {/* List Items */}
        <div className="flex-center">
          <p className="list-items">About Us</p>
          <p className="list-items">Contact</p>
          <p className="list-items">Blog</p>
        </div>
        <div className="flex-center">
          <p className="list-items">Careers</p>
          <p className="list-items">Support</p>
          <p className="list-items">Privacy Policy</p>
        </div>
        <div className="flex-center space-y-4 md:items-end">
          <button className="btn">Request Invite</button>
          <div>
            <p className="text-grayishBlue">
              &copy; Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
