import { useMemo } from "react";
import PropTypes from "prop-types";

const MarketTypeCards = ({
  className = "",
  marketSvgrepoCom1,
  thngLi,
  cropReliabilityThroughSup,
  propFlex,
}) => {
  const marketTypeCardsStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`flex-[0.7117] flex flex-row items-center justify-start py-0 pr-[91px] pl-0 box-border gap-[13px] min-w-[188px] z-[1] ml-[-30px] text-left text-xl text-white font-semibold-17 mq450:pr-5 mq450:box-border mq450:flex-1 ${className}`}
      style={marketTypeCardsStyle}
    >
      <div className="h-[72px] w-[72px] rounded-81xl bg-gray-800 overflow-hidden shrink-0 flex flex-col items-start justify-start p-[15px] box-border">
        <img
          className="w-[42px] h-[42px] relative overflow-hidden shrink-0"
          alt=""
          src={marketSvgrepoCom1}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 gap-[10px]">
        <div className="relative leading-[22px] font-semibold inline-block min-w-[110px] mq450:text-base mq450:leading-[18px]">
          {thngLi}
        </div>
        <div className="w-[186px] relative text-mid leading-[24px] hidden">
          {cropReliabilityThroughSup}
        </div>
      </div>
    </div>
  );
};

MarketTypeCards.propTypes = {
  className: PropTypes.string,
  marketSvgrepoCom1: PropTypes.string,
  thngLi: PropTypes.string,
  cropReliabilityThroughSup: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default MarketTypeCards;
