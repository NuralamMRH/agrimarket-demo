import { useMemo } from "react";
import PropTypes from "prop-types";

const FooterBig = ({
  className = "",
  logo,
  propAlignSelf,
  propMarginRight,
  propWidth,
}) => {
  const footerBig4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      marginRight: propMarginRight,
      width: propWidth,
    };
  }, [propAlignSelf, propMarginRight, propWidth]);

  return (
    <footer
      className={`self-stretch bg-darkslategray-300 flex flex-row items-start justify-start py-16 px-[165px] box-border gap-[8px] max-w-full shrink-0 text-left text-sm text-light-gray font-ibm-plex-sans mq800:py-[42px] mq800:px-[41px] mq800:box-border mq1350:flex-wrap mq1350:pl-[82px] mq1350:pr-[82px] mq1350:box-border ${className}`}
      style={footerBig4Style}
    >
      <div className="w-[350px] flex flex-col items-start justify-start gap-[40px] min-w-[350px] max-w-full mq450:gap-[20px] mq800:min-w-full mq1350:flex-1">
        <img
          className="w-[179px] h-[107px] relative overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src={logo}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative leading-[20px] whitespace-pre-wrap">
            Copyright © 2024 Bbee Smart Market
          </div>
          <div className="self-stretch relative leading-[20px]">
            All rights reserved
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative leading-[20px]">Follow us:</div>
          <div className="w-[294px] flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px]">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-8 w-8 relative min-h-[32px]"
                alt=""
                src="/social-icons.svg"
              />
              <img
                className="h-8 w-8 relative min-h-[32px]"
                alt=""
                src="/social-icons-1.svg"
              />
              <img
                className="h-8 w-8 relative min-h-[32px]"
                alt=""
                src="/social-icons-2.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
              <div className="flex-1 rounded-lg bg-light-gray box-border flex flex-row items-start justify-start py-1 px-3 gap-[18px] min-w-[92px] border-[1px] border-solid border-light-gray">
                <img
                  className="h-[21px] w-[18px] relative"
                  alt=""
                  src="/apple.svg"
                />
                <div className="w-[70px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch h-3.5 relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/app-store.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-light-gray box-border flex flex-row items-start justify-start py-1 px-[11px] gap-[14px] min-w-[92px] border-[1px] border-solid border-light-gray">
                <img
                  className="h-[21px] w-5 relative object-cover min-h-[21px]"
                  alt=""
                  src="/object@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="self-stretch h-[15px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/google-play.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[574px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[47px] min-w-[574px] max-w-full text-xl text-white mq800:flex-wrap mq800:gap-[23px] mq1150:min-w-full mq1350:flex-1">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[120px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
            Account
          </h3>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm">
            <div className="self-stretch relative leading-[20px]">
              Your account
            </div>
            <div className="self-stretch relative leading-[20px]">
              Your order
            </div>
            <div className="self-stretch relative leading-[20px]">
              Sell products on
            </div>
            <div className="self-stretch relative leading-[20px]">
              Browsing History
            </div>
            <div className="self-stretch relative leading-[20px]">
              Your Lists
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[120px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
            Company
          </h3>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm">
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-light-gray">
              Home
            </a>
            <a
              href="/importedfoodsourcing"
              className="[text-decoration:none] self-stretch relative leading-[20px] text-light-gray"
            >
              Imported Food Sourcing
            </a>
            <div className="self-stretch relative leading-[20px]">Buy</div>
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
              Auction
            </a>
            <div className="self-stretch relative leading-[20px]">
              Wholesale Markets
            </div>
            <div className="self-stretch relative leading-[20px]">Traders</div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[120px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
            Support
          </h3>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-light-gray">
            <div className="self-stretch relative leading-[20px]">
              Help center
            </div>
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
              Terms of service
            </a>
            <div className="self-stretch relative leading-[20px] text-white">
              Contact
            </div>
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterBig.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propMarginRight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FooterBig;
