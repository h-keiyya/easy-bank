import mockUps from "../images/image-mockups.png";

const Header = () => {
  return (
    <header
      id="header"
      className="bg-gradient-to-b from-lightGrayishBlue to-white bg-cover md:h-[50vh] lg:h-[80vh]"
    >
      <div className="container mx-auto flex flex-col-reverse items-center justify-center space-y-28 p-6 md:flex-row md:space-y-0 max-w-[1440px]">
        <div className="space-y-7 text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl leading-tight text-darkBlue md:text-5xl lg:text-6xl">
            Next generation <br /> digital banking
          </h1>
          <p className="text-grayishBlue md:w-[75%]">
            Take your financial life online. Your EasyBank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </p>
          <button className="btn">Request Invite</button>
        </div>
        <div className="w-1/2">
          <img src={mockUps} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
