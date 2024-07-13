import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent6 = ({
  className = "",
  rectangle385,
  fishingSeaPortsAndAqua,
  farmers,
  propHeight,
  propAlignSelf,
  propFlex,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propHeight, propAlignSelf, propFlex]);

  return (
    <div
      className={`h-[273px] rounded-3xs bg-aliceblue-200 flex flex-col items-end justify-start pt-0 px-0 pb-[27px] box-border gap-[20px] max-w-full z-[1] text-center text-base text-darkslategray-400 font-semibold-17 ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch h-[273px] relative rounded-3xs bg-aliceblue-200 hidden" />
      <img
        className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[2]"
        loading="lazy"
        alt=""
        src={rectangle385}
      />
      <b className="w-[303px] relative leading-[150%] capitalize inline-block z-[2]">
        <p className="m-0">{fishingSeaPortsAndAqua}</p>
        <p className="m-0">{farmers}</p>
      </b>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  rectangle385: PropTypes.string,
  fishingSeaPortsAndAqua: PropTypes.string,
  farmers: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default FrameComponent6;
