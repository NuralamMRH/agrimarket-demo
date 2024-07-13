import { useMemo } from "react";
import PropTypes from "prop-types";

const FoodCategoryItems = ({
  className = "",
  frame,
  seaFood,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const foodCategoryItems1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[137px] max-w-[140px] text-left text-xl text-gray-300 font-semibold-17 ${className}`}
      style={foodCategoryItems1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="h-[140px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-light-gray w-full h-full" />
          <img
            className="absolute top-[40px] left-[42px] w-[60px] h-[60px] overflow-hidden z-[1]"
            alt=""
            src={frame}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[27px]">
        <div className="relative leading-[22px] font-semibold inline-block min-w-[85px] mq450:text-base mq450:leading-[18px]">
          {seaFood}
        </div>
      </div>
    </div>
  );
};

FoodCategoryItems.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,
  seaFood: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FoodCategoryItems;
