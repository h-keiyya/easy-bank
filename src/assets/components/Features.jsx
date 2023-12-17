import OnlineBanking from "../images/icon-online.svg";
import SimpleBudget from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";
import OpenApi from "../images/icon-api.svg";

const Features = () => {
  return (
    <section className="bg-lightGrayishBlue text-darkBlue">
      <div className="container mx-auto flex flex-col px-6 py-16 space-y-10 max-w-[1440px]">
        {/* Title */}
        <div className="space-y-6">
          <h2 className="text-4xl">Why choose Easybank?</h2>
          <p className="text-grayishBlue md:w-1/2">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="flex flex-col space-y-6 items-center justify-center md:justify-start md:items-start">
            <img src={OnlineBanking} alt="" />
            <h3 className="text-3xl">Online Banking</h3>
            <p className="text-grayishBlue">
              Our modern web and mobile application allows you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col space-y-6 items-center justify-center md:justify-start md:items-start">
            <img src={SimpleBudget} alt="" />
            <h3 className="text-3xl">Simple Budgeting</h3>
            <p className="text-grayishBlue">
              See exactly where your money goes each month. Recieve
              notifications when you're close to your hitting limits.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col space-y-6 items-center justify-center md:justify-start md:items-start">
            <img src={Onboarding} alt="" />
            <h3 className="text-3xl">Fast Onboarding</h3>
            <p className="text-grayishBlue">
              We don't do branches. Open your account in minutes and start
              taking control of your finances right away.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col space-y-6 items-center justify-center md:justify-start md:items-start">
            <img src={OpenApi} alt="" />
            <h3 className="text-3xl">Open API</h3>
            <p className="text-grayishBlue">
              Manage your savings, investments, pensions, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
