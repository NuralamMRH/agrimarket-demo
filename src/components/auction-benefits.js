import PropTypes from "prop-types";

const AuctionBenefits = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-xl text-gray-300 font-semibold-17 mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-light-gray overflow-hidden flex flex-row items-start justify-center pt-[87px] pb-[95px] pr-5 pl-[22px] box-border gap-[20px] max-w-full lg:flex-wrap lg:justify-center mq750:pt-[57px] mq750:pb-[62px] mq750:box-border">
        <div className="w-[598px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[45px] px-[42px] pb-[139px] box-border gap-[51px] min-w-[600px] max-w-full lg:flex-1 mq450:pt-[29px] mq450:pb-[90px] mq450:box-border mq750:gap-[25px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border mq750:min-w-full">
          <div className="w-[503px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
            <div className="flex-1 relative tracking-[-0.02em] leading-[27px] uppercase font-semibold inline-block max-w-full mq450:text-base mq450:leading-[22px]">
              Our auction platform makes international trades that were once
              impossible, a reality
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-13xl text-yellowgreen-100 font-ibm-plex-sans">
            <div className="h-[47px] flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[30px]">
              <div className="mt-[-11px] h-12 w-[47px] relative">
                <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-light-gray w-[47px] h-[47px]" />
                <b className="absolute top-[0px] left-[13px] leading-[150%] inline-block min-w-[20px] z-[1] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                  1
                </b>
              </div>
              <div className="relative text-xl leading-[27px] font-semibold-17 text-black mq450:text-base mq450:leading-[22px]">
                Register Your Account
              </div>
            </div>
            <div className="h-[47px] flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[30px]">
              <div className="mt-[-11px] h-12 w-[47px] relative">
                <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-light-gray w-[47px] h-[47px]" />
                <b className="absolute top-[0px] left-[13px] leading-[150%] inline-block min-w-[20px] z-[1] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                  2
                </b>
              </div>
              <div className="relative text-xl leading-[27px] font-semibold-17 text-black mq450:text-base mq450:leading-[22px]">
                Bid on Commodities
              </div>
            </div>
            <div className="h-[47px] flex flex-row items-start justify-start pt-2.5 px-0 pb-0 box-border gap-[30px]">
              <div className="mt-[-11px] h-12 w-[47px] relative">
                <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-light-gray w-[47px] h-[47px]" />
                <b className="absolute top-[0px] left-[13px] leading-[150%] inline-block min-w-[20px] z-[1] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                  3
                </b>
              </div>
              <div className="relative text-xl leading-[27px] font-semibold-17 text-black mq450:text-base mq450:leading-[22px]">
                Secure the Product
              </div>
            </div>
          </div>
        </div>
        <div className="w-[600px] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[52px] px-[42px] pb-12 box-border gap-[30px] min-w-[600px] max-w-full lg:flex-1 mq450:pt-[34px] mq450:pb-[31px] mq450:box-border mq750:gap-[15px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border mq750:min-w-full">
          <div className="w-[491px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
            <img
              className="h-[243px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/wm-2@2x.png"
            />
          </div>
          <div className="w-[432px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
              Connecting World Markets
            </div>
            <div className="self-stretch relative leading-[27px] mq450:text-base mq450:leading-[22px]">
              Our auction platform makes international trades that were once
              impossible, a reality.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AuctionBenefits.propTypes = {
  className: PropTypes.string,
};

export default AuctionBenefits;
