import PropTypes from "prop-types";

const HighlightContent = ({
  className = "",
  notoearOfCorn,
  uSCORNEXPORTSTOTALED421MI,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[140px] text-center text-base text-darkslategray-200 font-semibold-17 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
        <div className="flex flex-row items-start justify-start py-0 px-[62px]">
          <img
            className="h-11 w-11 relative overflow-hidden shrink-0 z-[4]"
            loading="lazy"
            alt=""
            src={notoearOfCorn}
          />
        </div>
        <div className="self-stretch relative leading-[122%] lowercase z-[4]">
          {uSCORNEXPORTSTOTALED421MI}
        </div>
      </div>
    </div>
  );
};

HighlightContent.propTypes = {
  className: PropTypes.string,
  notoearOfCorn: PropTypes.string,
  uSCORNEXPORTSTOTALED421MI: PropTypes.string,
};

export default HighlightContent;
