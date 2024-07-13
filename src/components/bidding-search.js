import { Button } from "@mui/material";
import PropTypes from "prop-types";

const BiddingSearch = ({ className = "" }) => {
  return (
    <div
      className={`w-[1218px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-left text-base text-light-gray-2 font-poppins ${className}`}
    >
      <div className="w-[551px] rounded-21xl bg-whitesmoke-200 flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px] max-w-full z-[2] mq450:flex-wrap mq450:pr-5 mq450:pb-5 mq450:box-border">
        <div className="w-24 relative leading-[150%] font-medium hidden whitespace-nowrap">
          +123456789
        </div>
        <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0 text-mini text-gray-200 font-semibold-17">
          <div className="relative leading-[24px] capitalize">{`Search Auction Bidding `}</div>
        </div>
        <Button
          className="h-[54px] w-[122px]"
          endIcon={
            <img width="24px" height="24px" src="/arrow--arrow-left-lg-1.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            background: "#fb811f",
            borderRadius: "0px 30px 30px 0px",
            "&:hover": { background: "#fb811f" },
            width: 122,
            height: 54,
          }}
        >{`Search `}</Button>
      </div>
    </div>
  );
};

BiddingSearch.propTypes = {
  className: PropTypes.string,
};

export default BiddingSearch;
