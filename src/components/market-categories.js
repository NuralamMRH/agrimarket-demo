import { Button } from "@mui/material";
import PropTypes from "prop-types";

const MarketCategories = ({ className = "" }) => {
  return (
    <div
      className={`w-[1218px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-left text-base text-light-gray-2 font-poppins ${className}`}
    >
      <div className="flex flex-row items-start justify-center gap-[14px] max-w-full mq750:flex-wrap">
        <div className="rounded-21xl bg-olivedrab flex flex-row items-start justify-start pt-3 px-5 pb-[11px] z-[2] border-[1px] border-solid border-white">
          <div className="w-24 relative leading-[150%] font-medium hidden whitespace-nowrap">
            +123456789
          </div>
          <div className="relative text-mini leading-[27px] capitalize font-semibold font-semibold-17 text-white inline-block min-w-[86px]">
            Daily Catch
          </div>
        </div>
        <button className="cursor-pointer p-0 bg-olivedrab rounded-21xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-white">
          <div className="overflow-hidden flex flex-row items-start justify-start pt-3.5 pb-[13px] pr-[11px] pl-5">
            <div className="w-24 relative text-base leading-[150%] font-medium font-poppins text-light-gray-2 text-left hidden whitespace-nowrap">
              +123456789
            </div>
            <div className="relative text-mini leading-[27px] capitalize font-semibold font-semibold-17 text-white text-left inline-block min-w-[108px]">
              Fresh Harvest
            </div>
          </div>
        </button>
        <Button
          className="h-[54px] w-[126px] z-[2]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            background: "#5e9e2f",
            border: "#fff solid 1px",
            borderRadius: "40px",
            "&:hover": { background: "#5e9e2f" },
            width: 126,
            height: 54,
          }}
        >
          Dried Foods
        </Button>
        <Button
          className="h-[54px] w-[100px] z-[2]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            background: "#5e9e2f",
            border: "#fff solid 1px",
            borderRadius: "40px",
            "&:hover": { background: "#5e9e2f" },
            width: 100,
            height: 54,
          }}
        >
          SeaFood
        </Button>
        <div className="rounded-21xl bg-olivedrab flex flex-row items-start justify-start pt-3 pb-[11px] pr-[19px] pl-5 z-[2] border-[1px] border-solid border-white">
          <div className="w-24 relative leading-[150%] font-medium hidden whitespace-nowrap">
            +123456789
          </div>
          <div className="relative text-mini leading-[27px] capitalize font-semibold font-semibold-17 text-white inline-block min-w-[38px]">
            Meat
          </div>
        </div>
      </div>
    </div>
  );
};

MarketCategories.propTypes = {
  className: PropTypes.string,
};

export default MarketCategories;
