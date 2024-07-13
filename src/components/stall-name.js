import { useMemo } from "react";
import PropTypes from "prop-types";

const StallName = ({
  className = "",
  uTLUOMKiosk,
  voVanTeoEm,
  pork,
  prop,
  propFlex,
  propPadding,
}) => {
  const stallNameStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[10px] text-left text-xl text-black font-ibm-plex-sans ${className}`}
      style={stallNameStyle}
    >
      <div className="relative leading-[150%] capitalize font-semibold mq450:text-base mq450:leading-[24px]">
        {uTLUOMKiosk}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[6px] text-sm text-gray-300 font-semibold-17">
        <div className="relative leading-[18px] capitalize">
          <span>Trader:</span>
          <span className="text-black">{voVanTeoEm}</span>
        </div>
        <div className="relative leading-[18px] capitalize inline-block min-w-[101px]">
          <span>Business:</span>
          <span className="text-black">{pork}</span>
        </div>
        <div className="self-stretch h-[37px] flex flex-row items-baseline justify-start pt-0 px-0 pb-0 box-border gap-[3px] text-black">
          <img
            className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/map-pins--iconsvgco.svg"
          />
          <div className="h-[46px] flex-1 relative leading-[18px] capitalize inline-block">
            Nguyen Van Linh Avenue, Quarter 6, Ward 7, District 8, City. HCM
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[3px] text-black">
          <img
            className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
            alt=""
            src="/remove-phone-call--iconsvgco.svg"
          />
          <div className="relative leading-[18px] capitalize inline-block min-w-[88px]">
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

StallName.propTypes = {
  className: PropTypes.string,
  uTLUOMKiosk: PropTypes.string,
  voVanTeoEm: PropTypes.string,
  pork: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
};

export default StallName;
