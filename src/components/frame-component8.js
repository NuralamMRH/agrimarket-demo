import FeaturedAuction from "./featured-auction";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-xl text-white font-semibold-17 mq450:pb-[34px] mq450:box-border mq1050:pb-[52px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-yellowgreen-100 overflow-hidden flex flex-col items-center justify-start py-20 pr-6 pl-5 box-border gap-[46px] max-w-full mq750:gap-[23px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
        <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
        <div className="w-[1212px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
            Recommendations
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[20px] grid-cols-[repeat(4,_minmax(216px,_1fr))] mq450:grid-cols-[minmax(216px,_1fr)] mq1050:grid-cols-[repeat(2,_minmax(216px,_374px))] mq1050:justify-center">
            <FeaturedAuction propWidth="unset" />
            <FeaturedAuction propWidth="unset" />
            <FeaturedAuction propWidth="unset" />
            <FeaturedAuction propWidth="unset" />
          </div>
        </div>
        <div className="w-[1212px] flex flex-row items-start justify-center py-0 pr-0 pl-1 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="h-3 w-3 relative rounded-[50%] bg-white" />
            <div className="h-3 w-3 relative rounded-[50%] bg-dark-green" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
