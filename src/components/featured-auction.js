import { useMemo } from "react";
import PropTypes from "prop-types";

const FeaturedAuction = ({ className = "", propWidth }) => {
  const featuredAuctionStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start pt-5 px-5 pb-[15px] text-left text-xl text-black font-ibm-plex-sans ${className}`}
      style={featuredAuctionStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
          <img
            className="self-stretch h-[151px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mask-group-4@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[13px]">
            <div className="relative leading-[150%] capitalize font-medium mq450:text-base mq450:leading-[24px]">
              Product Name
            </div>
            <div className="w-[269px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border gap-[6px] text-mini text-gray-300 font-semibold-17">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-darkorange">
                <div className="relative capitalize inline-block min-w-[124px]">
                  <span>
                    <span className="leading-[27px] font-semibold">
                      USD $794.00
                    </span>
                    <span className="leading-[24px] whitespace-pre-wrap text-gray-300">{`  `}</span>
                  </span>
                  <span className="leading-[24px] whitespace-pre-wrap text-gray-300">
                    <span>kg</span>
                  </span>
                </div>
                <div className="relative leading-[24px] capitalize text-gray-300 inline-block min-w-[78px]">
                  Ends 1d 6h
                </div>
              </div>
              <div className="relative capitalize text-yellowgreen-100">
                <span className="leading-[27px] font-semibold">
                  USD $394.00
                </span>
                <span className="leading-[24px] text-gray-300">
                  {" "}
                  8 Bids - Current Bid
                </span>
              </div>
              <div className="relative leading-[24px] capitalize">
                USD $394.00 8 Bids - Min Bid
              </div>
              <div className="relative leading-[24px] capitalize">
                <span>{`Daily Catch: `}</span>
                <span className="text-dimgray-200">Status</span>
              </div>
              <div className="relative leading-[24px] capitalize inline-block min-w-[110px]">
                <span>{`50 kg: `}</span>
                <span className="text-dimgray-200">Quantity</span>
              </div>
              <div className="relative leading-[24px] capitalize">
                <span>30 kg:</span>
                <span className="text-dimgray-200"> Available for bidding</span>
              </div>
              <div className="relative leading-[24px] capitalize text-dimgray-200">
                Product Specification Form
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 min-h-[13px]"
                  alt=""
                  src="/frame-6.svg"
                />
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 min-h-[13px]"
                  alt=""
                  src="/frame-6.svg"
                />
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 min-h-[13px]"
                  alt=""
                  src="/frame-6.svg"
                />
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 min-h-[13px]"
                  alt=""
                  src="/frame-6.svg"
                />
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0 min-h-[13px]"
                  alt=""
                  src="/frame-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturedAuction.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FeaturedAuction;
