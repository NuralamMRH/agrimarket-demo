import FarmerMore from "./farmer-more";
import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[70px] box-border max-w-full text-left text-xl text-gray-300 font-ibm-plex-sans mq450:pb-[29px] mq450:box-border mq1050:pb-[45px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-light-gray overflow-hidden flex flex-col items-start justify-start pt-[70px] px-28 pb-[83px] box-border gap-[10px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[45px] mq750:px-14 mq750:pb-[54px] mq750:box-border">
        <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
        <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold font-semibold-17 inline-block max-w-full mq450:text-base mq450:leading-[22px]">
          Find Supplier for Lowest $ Sourcing
        </div>
        <div className="w-[212px] relative leading-[150%] capitalize font-semibold whitespace-pre-wrap hidden mq450:text-base mq450:leading-[24px]">
          Sourcing OCOP Broker
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[389px] max-w-full mq750:min-w-full">
            <div className="relative leading-[150%] capitalize font-semibold mq450:text-base mq450:leading-[24px]">
              Sourcing Farmer
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full text-mini font-semibold-17 mq750:gap-[30px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                <div className="flex-1 rounded-xl flex flex-row items-start justify-start bg-[url('/public/rectangle-102@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[217px]">
                  <img
                    className="self-stretch w-[289px] relative rounded-xl max-h-full object-cover hidden min-h-[385px]"
                    alt=""
                    src="/rectangle-102@2x.png"
                  />
                  <div className="h-[385px] flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(49,_49,_49,_0.53),_rgba(111,_120,_107,_0))] overflow-hidden flex flex-row items-end justify-start p-2.5 box-border z-[1]">
                    <div className="flex-1 rounded-mini bg-gray-900 flex flex-col items-start justify-start p-2.5 gap-[12px]">
                      <div className="relative leading-[27px] capitalize font-semibold inline-block min-w-[63px]">
                        Farmer 1
                      </div>
                      <div className="self-stretch relative text-sm leading-[18px] capitalize">
                        Binh Dien Market is one of the largest agricultural food
                        markets in Ho Chi Minh City. This is also the only
                        wholesale market supplying seafood to the market here.
                      </div>
                    </div>
                  </div>
                </div>
                <FarmerMore />
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] max-w-full text-xl text-yellowgreen-100">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative leading-[22px] font-semibold mq450:text-base mq450:leading-[18px]">
                    Go to regional farming supplier
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/arrow--arrow-left-lg.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[389px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
              <div className="relative leading-[150%] capitalize font-semibold mq450:text-base mq450:leading-[24px]">
                OCOP Supplier
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-mini font-semibold-17 mq750:flex-wrap">
                <div className="flex-1 flex flex-row items-end justify-start p-2.5 box-border relative min-w-[188px] min-h-[385px]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/group-7@2x.png"
                    />
                    <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(51,_51,_51,_0.24),_rgba(111,_120,_107,_0))] z-[1]" />
                  </div>
                  <div className="flex-1 rounded-mini bg-gray-900 flex flex-col items-start justify-start p-2.5 gap-[12px] z-[2]">
                    <div className="relative leading-[27px] capitalize font-semibold inline-block min-w-[101px]">
                      Daily catches
                    </div>
                    <div className="self-stretch relative text-sm leading-[18px] capitalize">
                      Binh Dien Market is one of the largest agricultural food
                      markets in Ho Chi Minh City. This is also the only
                      wholesale market supplying seafood to the market here.
                    </div>
                  </div>
                </div>
                <FarmerMore propFlex="0.9182" propMinWidth="188px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
