import { useMemo } from "react";
import PropTypes from "prop-types";

const FoodCategoryItems1 = ({
  className = "",
  harvestSvgrepoCom1,
  freshHarvest,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const foodCategoryItemsStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[137px] max-w-[140px] text-left text-xl text-gray-300 font-semibold-17 ${className}`}
      style={foodCategoryItemsStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="h-[140px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-light-gray w-full h-full" />
          <img
            className="absolute top-[45px] left-[45px] w-[50px] h-[50px] overflow-hidden z-[1]"
            alt=""
            src={harvestSvgrepoCom1}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-0.5">
        <div className="relative leading-[22px] font-semibold mq450:text-base mq450:leading-[18px]">
          {freshHarvest}
        </div>
      </div>
    </div>
  );
};

FoodCategoryItems1.propTypes = {
  className: PropTypes.string,
  harvestSvgrepoCom1: PropTypes.string,
  freshHarvest: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FoodCategoryItems1;
