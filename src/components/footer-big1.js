import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FooterBig1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBuyTextClick = useCallback(() => {
    navigate("/ecommercemarketplace");
  }, [navigate]);

  const onImportedFoodSourcingClick = useCallback(() => {
    navigate("/importedfoodsourcing");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <footer
      className={`self-stretch bg-dimgray-500 flex flex-row items-start justify-start py-16 px-[165px] box-border gap-[8px] max-w-full text-left text-sm text-light-gray font-ibm-plex-sans lg:flex-wrap lg:pl-[82px] lg:pr-[82px] lg:box-border mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq750:pl-[41px] mq750:pr-[41px] mq750:box-border ${className}`}
    >
      <div className="w-[350px] flex flex-col items-start justify-start gap-[40px] min-w-[350px] max-w-full lg:flex-1 mq450:gap-[20px] mq750:min-w-full">
        <div className="w-[181px] relative text-xl leading-[22px] font-semibold font-semibold-17 text-whitesmoke-200 inline-block mq450:text-base mq450:leading-[18px]">
          SmartBbee AgriAuction Platform
        </div>
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
                loading="lazy"
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
                    loading="lazy"
                    alt=""
                    src="/app-store.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-light-gray box-border flex flex-row items-start justify-start py-1 px-[11px] gap-[14px] min-w-[92px] border-[1px] border-solid border-light-gray">
                <img
                  className="h-[21px] w-5 relative object-contain min-h-[21px]"
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
      <div className="w-[574px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[47px] min-w-[574px] max-w-full text-xl text-white lg:flex-1 mq750:flex-wrap mq750:gap-[23px] mq1050:min-w-full">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[120px]">
          <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
            Account
          </div>
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
          <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
            Company
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm">
            <div className="self-stretch relative leading-[20px] text-light-gray">
              Home
            </div>
            <div
              className="self-stretch relative leading-[20px] cursor-pointer"
              onClick={onBuyTextClick}
            >
              Buy
            </div>
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
              Auction
            </a>
            <div className="self-stretch relative leading-[20px]">
              Wholesale Markets
            </div>
            <div
              className="relative leading-[20px] cursor-pointer"
              onClick={onImportedFoodSourcingClick}
            >
              Imported Food Sourcing
            </div>
            <div className="self-stretch relative leading-[20px]">Traders</div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[24px] min-w-[120px]">
          <div className="self-stretch relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
            Support
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-sm text-light-gray">
            <a
              className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About Us
            </a>
            <div className="self-stretch relative leading-[20px] text-white">
              Contact
            </div>
            <div className="self-stretch relative leading-[20px]">
              Help center
            </div>
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
              Terms of service
            </a>
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit]">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterBig1.propTypes = {
  className: PropTypes.string,
};

export default FooterBig1;
