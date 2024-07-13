import { useMemo } from "react";
import PropTypes from "prop-types";

const WinePair = ({
  className = "",
  image111,
  lodiOldZinfandelCaliforni,
  propGap,
}) => {
  const winePairStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex-1 rounded-2xl bg-aliceblue-100 flex flex-col items-start justify-start pt-1 px-[9px] pb-[19px] box-border gap-[9px] min-w-[183px] z-[6] text-center text-sm text-darkslategray-200 font-semibold-17 ${className}`}
      style={winePairStyle}
    >
      <div className="w-[205px] h-[236px] relative rounded-2xl bg-aliceblue-100 hidden" />
      <div className="w-[174px] flex flex-row items-start justify-start py-0 px-9 box-border">
        <img
          className="h-[170px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-darken z-[7]"
          loading="lazy"
          alt=""
          src={image111}
        />
      </div>
      <div className="self-stretch relative leading-[123%] capitalize z-[7]">
        {lodiOldZinfandelCaliforni}
      </div>
    </div>
  );
};

WinePair.propTypes = {
  className: PropTypes.string,
  image111: PropTypes.string,
  lodiOldZinfandelCaliforni: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default WinePair;
