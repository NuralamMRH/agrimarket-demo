import PropTypes from "prop-types";

const PlatformDescription = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[113px] pr-5 pl-6 box-border max-w-full text-center text-13xl text-white font-semibold-17 mq800:pb-[47px] mq800:box-border mq1350:pb-[73px] mq1350:box-border ${className}`}
    >
      <div className="w-[1032px] flex flex-col items-start justify-start gap-[80px] max-w-full mq800:gap-[20px] mq1150:gap-[40px]">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[441px] w-[1213px] absolute !m-[0] bottom-[-181px] left-[-91px] rounded-3xs object-cover"
            alt=""
            src="/rectangle-366@2x.png"
          />
          <h1 className="m-0 flex-1 relative text-inherit leading-[167%] capitalize inline-block max-w-full z-[1] font-inherit mq450:text-lgi mq450:leading-[32px] mq800:text-7xl mq800:leading-[43px]">
            <span className="font-medium">Our</span>
            <b>{` AI-Powered `}</b>
            <span className="font-medium whitespace-pre-wrap">
              Platform digitizes supply chain networks enabling wholesalers to
              auction and trade agriculture products directly with farmers and
              fishermen, with the following tools:
            </span>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px] box-border max-w-full text-right text-5xl text-darkslategray-200">
          <div className="flex-1 flex flex-col items-end justify-start gap-[50px] max-w-full mq800:gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 box-border max-w-full">
              <div className="flex-1 rounded-3xs bg-honeydew-100 flex flex-row items-start justify-end py-[110px] px-[90px] box-border relative min-h-[347px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[45px] mq800:pr-[45px] mq800:box-border">
                <div className="h-[347px] w-[1010px] relative rounded-3xs bg-honeydew-100 hidden max-w-full z-[0]" />
                <h2 className="m-0 w-[361px] relative text-inherit leading-[150%] capitalize font-normal font-inherit whitespace-pre-wrap inline-block shrink-0 max-w-full z-[2] mq450:text-lgi mq450:leading-[29px]">
                  A Digital Directory with Landing Pages and CRM tools for
                  Vietnam wholesalers.
                </h2>
                <img
                  className="h-[379px] w-[569px] absolute !m-[0] bottom-[-26px] left-[29px] object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/officeworkersorganizingdatastoragefilearchiveservercomputercartoonillustration-1@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-linen flex flex-row items-start justify-start pt-[92px] px-[76px] pb-[75px] box-border relative max-w-full text-left mq800:pl-[38px] mq800:pr-[38px] mq800:box-border">
              <div className="h-[347px] w-[1010px] relative rounded-3xs bg-linen hidden max-w-full z-[0]" />
              <h2 className="m-0 w-[354px] relative text-inherit leading-[150%] capitalize font-normal font-inherit whitespace-pre-wrap inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[29px]">
                A Digital "Cho Dau Moi" (Wholesalemarketplace) across 54 cities
                connecting with farmers, fisherman, food processors and
                importers.
              </h2>
              <img
                className="h-96 w-[575px] absolute !m-[0] right-[0px] bottom-[-36px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/cxb-1@2x.png"
              />
            </div>
            <div className="self-stretch rounded-3xs bg-lightcyan flex flex-row items-start justify-start pt-[19px] px-[33px] pb-0 box-border gap-[7px] max-w-full mq1150:flex-wrap">
              <div className="h-[347px] w-[1010px] relative rounded-3xs bg-lightcyan hidden max-w-full" />
              <img
                className="w-[524px] relative max-h-full object-contain max-w-full z-[1] mq1150:flex-1"
                loading="lazy"
                alt=""
                src="/happyfemalefarmerworkingfarmfeedpopulationflatvectorillustrationcartoonfarmwithautomationtechnology-1@2x.png"
              />
              <div className="w-[382px] flex flex-col items-start justify-start pt-[72px] px-0 pb-0 box-border min-w-[382px] max-w-full mq800:min-w-full mq1150:flex-1">
                <h2 className="m-0 self-stretch relative text-inherit leading-[150%] capitalize font-normal font-inherit whitespace-pre-wrap z-[1] mq450:text-lgi mq450:leading-[29px]">
                  A WebKioskTool for thousands of Wholesalers, Farmers and Agri
                  Brokers to digitize their storefronts and catalogue their
                  products.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PlatformDescription.propTypes = {
  className: PropTypes.string,
};

export default PlatformDescription;
