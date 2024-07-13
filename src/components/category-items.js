import { useMemo } from "react";
import PropTypes from "prop-types";

const CategoryItems = ({
  className = "",
  maskGroup,
  c1VaKiosk,
  thyHiSn,
  propPadding,
}) => {
  const categoryItemsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[9px] min-w-[119px] max-w-[119px] text-center text-sm text-white font-semibold-17 ${className}`}
      style={categoryItemsStyle}
    >
      <img
        className="self-stretch h-[109px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        alt=""
        src={maskGroup}
      />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-3">
        <b className="flex-1 relative leading-[111%] z-[2]">
          <p className="m-0">{c1VaKiosk}</p>
          <p className="m-0">{thyHiSn}</p>
        </b>
      </div>
    </div>
  );
};

CategoryItems.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  c1VaKiosk: PropTypes.string,
  thyHiSn: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default CategoryItems;
