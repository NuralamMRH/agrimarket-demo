import { useMemo } from "react";
import PropTypes from "prop-types";

const FarmerMore = ({ className = "", propFlex, propMinWidth }) => {
  const farmerMoreStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={`flex-[0.8547] rounded-xl bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-7 gap-[154px] min-w-[217px] text-left text-mini text-gray-300 font-semibold-17 border-[1px] border-solid border-gray-light2 mq450:pt-5 mq450:pb-5 mq450:box-border mq450:flex-1 ${className}`}
      style={farmerMoreStyle}
    >
      <div className="relative leading-[24px] capitalize">
        <ul className="m-0 font-inherit text-inherit pl-5">
          <li className="mb-0">The West Central Pacific</li>
          <li className="mb-0">The West Central Pacific</li>
          <li className="mb-0">The West Central Pacific</li>
          <li className="mb-0">The West Central Pacific</li>
          <li className="mb-0">The West Central Pacific</li>
          <li>The West Central Pacific</li>
        </ul>
      </div>
      <div className="rounded-4xl flex flex-row items-start justify-start py-2.5 px-5 text-xs text-yellowgreen-100">
        <div className="relative leading-[120%] font-semibold inline-block min-w-[40px]">
          See All
        </div>
      </div>
    </div>
  );
};

FarmerMore.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FarmerMore;
