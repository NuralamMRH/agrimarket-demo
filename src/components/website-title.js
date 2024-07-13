import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import CategoryItems from "./category-items";
import PropTypes from "prop-types";

const WebsiteTitle = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full shrink-0 text-left text-9xl text-white font-semibold-17 ${className}`}
    >
      <div className="w-[1223px] flex flex-col items-start justify-start gap-[17px] shrink-0 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[759px] flex flex-col items-start justify-start gap-[26px] max-w-full">
            <h3 className="m-0 self-stretch relative text-inherit leading-[111%] font-bold font-inherit z-[2] mq450:text-3xl mq450:leading-[25px]">
              NÔNG SẢN CHỢ ĐẦU MỐI (E-Commerce Market Place)
            </h3>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-16 box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:box-border">
              <TextField
                className="[border:none] bg-[transparent] h-[54px] w-[596px] font-semibold-17 text-mini text-gray-200 max-w-full z-[2]"
                placeholder="Search Auction Bidding "
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img
                      width="24px"
                      height="24px"
                      src="/mingcutesearchline.svg"
                    />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#f3f3f3",
                    paddingRight: "23px",
                    borderRadius: "40px",
                    fontSize: "15px",
                  },
                  "& .MuiInputBase-input": { color: "#797979" },
                  width: "596px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
          <h3 className="m-0 relative text-inherit leading-[111%] font-bold font-inherit z-[2] mq450:text-3xl mq450:leading-[25px]">
            Category
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-center text-sm">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[16px] max-w-full">
              <CategoryItems
                maskGroup="/mask-group3@2x.png"
                c1VaKiosk="C1.Vựa-Kiosk "
                thyHiSn="Thủy Hải Sản"
              />
              <CategoryItems
                maskGroup="/mask-group-13@2x.png"
                c1VaKiosk="C2.Vựa-Kiosk"
                thyHiSn="Đồ Khô"
                propPadding="0px 4px 0px 0px"
              />
              <CategoryItems
                maskGroup="/mask-group-22@2x.png"
                c1VaKiosk="C3.Vựa-Kiosk"
                thyHiSn="Thịt"
                propPadding="unset"
              />
              <CategoryItems
                maskGroup="/mask-group-32@2x.png"
                c1VaKiosk="C4.Vựa-Kiosk"
                thyHiSn="Trái Cây"
                propPadding="unset"
              />
              <CategoryItems
                maskGroup="/mask-group-41@2x.png"
                c1VaKiosk="C5.Vựa-Kiosk"
                thyHiSn="Rau Củ Quả"
                propPadding="unset"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[122px] max-w-[121px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                  <img
                    className="h-[109px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                    alt=""
                    src="/mask-group-5@2x.png"
                  />
                </div>
                <b className="w-[115px] relative leading-[111%] inline-block z-[2]">
                  C6.Gia Vị, Thực Phẩm Khác
                </b>
              </div>
              <CategoryItems
                maskGroup="/mask-group-6@2x.png"
                c1VaKiosk="C7.Dụng Cụ"
                thyHiSn="Nhà Bếp"
                propPadding="unset"
              />
              <CategoryItems
                maskGroup="/mask-group-7@2x.png"
                c1VaKiosk="C8.Dụng Cụ"
                thyHiSn="Nhà Hàng"
                propPadding="0px 5px 0px 0px"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[119px] max-w-[119px]">
                <img
                  className="self-stretch h-[109px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
                  alt=""
                  src="/mask-group-8@2x.png"
                />
                <b className="self-stretch relative leading-[111%] z-[2]">
                  <p className="m-0">C9.Thiết Bị</p>
                  <p className="m-0">Điện Lạnh</p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WebsiteTitle.propTypes = {
  className: PropTypes.string,
};

export default WebsiteTitle;
