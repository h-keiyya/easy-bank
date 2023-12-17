import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

const Articles = () => {
  return (
    <section className="pt-10 bg-veryLightGray">
      <div className="container mx-auto flex flex-col space-y-7 p-6">
        <h2 className="text-5xl">Latest Articles</h2>
        {/* Artilces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Article 1 */}
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] space-y-4">
            <a href="#!">
              <img className="rounded-t-lg" src={Currency} alt="" />
            </a>
            <div className="p-6 space-y-3">
              <p className="text-grayishBlue text-sm">By Claire Robinson</p>
              <h2 className="mb-2 text-2xl font-medium leading-tight text-darkBlue list-items">
                Recieve money in any currency with no fees
              </h2>
              <p className="mb-4 text-base text-grayishBlue">
                Some quick example text to build on the card title and make up
                the bulk of the card's content...
              </p>
            </div>
          </div>
          {/* Article 2 */}
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] space-y-4">
            <a href="#!">
              <img className="rounded-t-lg" src={Restaurant} alt="" />
            </a>
            <div className="p-6 space-y-3">
              <p className="text-grayishBlue text-sm">By Wilson Hutton</p>
              <h2 className="mb-2 text-2xl font-medium leading-tight text-darkBlue list-items">
                Treat yourself without worrying about money
              </h2>
              <p className="mb-4 text-base text-grayishBlue">
                Our simple budgetting feature allows you yo separate out you
                spending and set realistic limits each month. That means you...
              </p>
            </div>
          </div>
          {/* Article 3 */}
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] space-y-4">
            <a href="#!">
              <img className="rounded-t-lg" src={Plane} alt="" />
            </a>
            <div className="p-6 space-y-3">
              <p className="text-grayishBlue text-sm">By Wilson Hutton</p>
              <h2 className="mb-2 text-2xl font-medium leading-tight text-darkBlue list-items">
                Take your Easybank card wherever you go
              </h2>
              <p className="mb-4 text-base text-grayishBlue">
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show
                you...
              </p>
            </div>
          </div>
          {/* Article 4 */}
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] space-y-4">
            <a href="#!">
              <img className="rounded-t-lg" src={Confetti} alt="" />
            </a>
            <div className="p-6 space-y-3">
              <p className="text-grayishBlue text-sm">By Claire Robinson</p>
              <h2 className="mb-2 text-2xl font-medium leading-tight text-darkBlue list-items">
                Our invite-only Beta accounts are now live!
              </h2>
              <p className="mb-4 text-base text-grayishBlue">
                After a lot of hard work by the whole team, we're excited to
                launch our closed beta. It's easy to request an invite through
                the site...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
