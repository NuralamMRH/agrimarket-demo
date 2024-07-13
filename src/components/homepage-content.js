import FeaturedAuction from "./featured-auction";
import PropTypes from "prop-types";

const HomepageContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-light-gray overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[46px] max-w-full text-left text-xl text-gray-300 font-semibold-17 mq750:gap-[23px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
      <div className="w-[1216px] flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
          Recently Viewed
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <FeaturedAuction propWidth="288px" />
          <FeaturedAuction propWidth="288px" />
          <div className="flex-1 rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start pt-5 pb-[15px] pr-[21px] pl-5 box-border min-w-[390px] max-w-full mq750:min-w-full">
            <img
              className="h-[435px] flex-1 relative max-w-full overflow-hidden object-contain"
              alt=""
              src="/mask-group-10@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[1216px] flex flex-row items-start justify-center max-w-full">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <div className="h-3 w-3 relative rounded-[50%] bg-white" />
          <div className="h-3 w-3 relative rounded-[50%] bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

HomepageContent.propTypes = {
  className: PropTypes.string,
};

export default HomepageContent;
