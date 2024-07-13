import PropTypes from "prop-types";

const CategoryIconContainers = ({ className = "", maskGroup, vegitable }) => {
  return (
    <div
      className={`h-[219px] w-[289px] flex flex-col items-start justify-start gap-[13px] text-left text-5xl text-black font-semibold-17 ${className}`}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[3]"
        alt=""
        src={maskGroup}
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <div className="relative leading-[150%] capitalize font-semibold inline-block min-w-[110px] z-[3] mq450:text-lgi mq450:leading-[29px]">
          {vegitable}
        </div>
      </div>
    </div>
  );
};

CategoryIconContainers.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  vegitable: PropTypes.string,
};

export default CategoryIconContainers;
