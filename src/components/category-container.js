import PropTypes from "prop-types";

const CategoryContainer = ({ className = "" }) => {
  return (
    <section
      className={`w-[1408px] flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-xl text-gray-300 font-semibold-17 mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div className="w-[1184px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px]">
        <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
          Customer Reviews
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[33px] box-border max-w-full">
          <div className="flex-1 rounded-xl bg-light-gray flex flex-col items-start justify-start p-[30px] box-border max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/frame-56.svg"
              />
              <div className="flex-1 flex flex-row items-center justify-start gap-[40px] min-w-[670px] max-w-full lg:flex-wrap mq750:gap-[20px] mq1050:min-w-full">
                <div className="flex flex-row items-center justify-start gap-[20px] max-w-full mq750:flex-wrap">
                  <img
                    className="h-[150px] w-[150px] relative rounded-[50%] object-cover mq750:flex-1"
                    loading="lazy"
                    alt=""
                    src="/ellipse-4@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start py-5 px-0 gap-[6px]">
                    <div className="relative leading-[22px] font-semibold inline-block min-w-[111px] mq450:text-base mq450:leading-[18px]">
                      Jane Garon
                    </div>
                    <div className="relative text-mini leading-[24px] capitalize">
                      Owner of Jane Garon Kiosk
                    </div>
                  </div>
                </div>
                <blockquote className="m-0 h-20 w-[545px] relative text-mid leading-[24px] inline-block shrink-0 max-w-full">
                  "Borong's service team has done an exceptional job since day
                  one. I'm especially impressed with their diverse marketplace,
                  offering high quality products with a long shelf life."
                </blockquote>
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-57.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CategoryContainer.propTypes = {
  className: PropTypes.string,
};

export default CategoryContainer;
