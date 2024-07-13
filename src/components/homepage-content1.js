import FeaturedAuction from "./featured-auction";
import PropTypes from "prop-types";

const HomepageContent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-blue overflow-hidden flex flex-col items-start justify-start py-20 px-28 box-border gap-[30px] max-w-full text-left text-xl text-white font-semibold-17 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[15px] mq750:py-[52px] mq750:px-14 mq750:box-border ${className}`}
    >
      <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
      <div className="relative leading-[150%] uppercase font-semibold mq450:text-base mq450:leading-[24px]">
        Featured Auctions
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13px] box-border max-w-full text-black font-ibm-plex-sans">
        <div className="flex-1 grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(4,_minmax(216px,_1fr))] lg:grid-cols-[repeat(2,_minmax(216px,_374px))] lg:justify-center mq750:grid-cols-[minmax(216px,_1fr)]">
          <FeaturedAuction />
          <FeaturedAuction propWidth="unset" />
          <FeaturedAuction propWidth="unset" />
          <FeaturedAuction propWidth="unset" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <div className="h-3 w-3 relative rounded-[50%] bg-white" />
          <div className="h-3 w-3 relative rounded-[50%] bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

HomepageContent1.propTypes = {
  className: PropTypes.string,
};

export default HomepageContent1;
