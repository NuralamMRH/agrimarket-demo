import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  group,
  dailyCatch,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className={`w-[140px] flex flex-col items-start justify-start gap-[12px] text-left text-xl text-white font-semibold-17 ${className}`}
      style={frameDiv1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="h-[140px] flex-1 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-full h-full border-[0px] border-solid border-yellowgreen-100" />
          <img
            className="absolute top-[46px] left-[41px] w-[59px] h-12 z-[1]"
            loading="lazy"
            alt=""
            src={group}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-3.5">
        <h3 className="m-0 relative text-inherit leading-[22px] font-semibold font-inherit inline-block min-w-[111px] mq450:text-base mq450:leading-[18px]">
          {dailyCatch}
        </h3>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  dailyCatch: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent;
