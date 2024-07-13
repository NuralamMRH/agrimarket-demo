import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[249px] pr-5 pl-[75px] box-border max-w-full shrink-0 text-center text-lg text-white font-semibold-17 mq800:pb-[105px] mq800:box-border mq1350:pl-[37px] mq1350:pb-[162px] mq1350:box-border ${className}`}
    >
      <div className="w-[1085px] flex flex-col items-start justify-start gap-[121px] max-w-full mq450:gap-[15px] mq800:gap-[30px] mq1150:gap-[60px]">
        <div className="w-[1030px] flex flex-row items-start justify-start py-0 px-14 box-border max-w-full mq1150:pl-7 mq1150:pr-7 mq1150:box-border">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="w-[885px] h-[255px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="self-stretch w-[255px] flex flex-row items-start justify-start py-[81px] px-[51px] box-border relative">
                <b className="w-[13px] relative tracking-[-0.02em] capitalize flex items-center justify-center min-w-[13px]">
                  t
                </b>
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/webrest-20240711-165504-0000@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full mt-[-22px] text-13xl text-darkslateblue">
              <img
                className="h-[378px] w-[1213px] absolute !m-[0] top-[-233px] right-[-149px] object-cover z-[1]"
                alt=""
                src="/mask-group1@2x.png"
              />
              <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[47px] capitalize font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[3] mq450:text-lgi mq450:leading-[28px] mq800:text-7xl mq800:leading-[38px]">
                AgriBbee Digital Tool helps you to publish your organization’s
                website on our Agriculture Portal in minutes
              </h1>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-13xl text-dodgerblue-100 mq1150:flex-wrap">
          <div className="w-[534px] flex flex-col items-start justify-start pt-[84px] px-0 pb-0 box-border min-w-[534px] max-w-full mq450:pt-9 mq450:box-border mq800:pt-[55px] mq800:box-border mq800:min-w-full mq1150:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[125px] max-w-full mq450:gap-[31px] mq800:gap-[62px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
                <h1 className="m-0 h-48 flex-1 relative text-inherit leading-[150%] capitalize inline-block max-w-full font-inherit mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
                  <b className="whitespace-pre-wrap">
                    <span>{`AI-Powered AgriBee `}</span>
                  </b>
                  <span className="text-darkslategray-200">
                    <b className="whitespace-pre-wrap">{` `}</b>
                    <span className="whitespace-pre-wrap">
                      platform enables your organization reach Vietnamese
                      Retailers, WholeSales and Food Importers.
                    </span>
                  </span>
                </h1>
              </div>
              <div className="w-[402px] h-[402px] relative rounded-[50%] bg-dodgerblue-300 max-w-full" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[154px] min-w-[365px] max-w-full ml-[-11px] text-right mq450:gap-[38px] mq800:gap-[77px] mq800:min-w-full mq1150:ml-0">
            <div className="w-[482px] flex flex-row items-start justify-end py-0 px-[47px] box-border max-w-full mq800:pl-[23px] mq800:pr-[23px] mq800:box-border">
              <div className="h-[360px] flex-1 relative max-w-full">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[28px] rounded-[50%] bg-dodgerblue-300 w-[360px]" />
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] max-h-full w-[360px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ellipse-57@2x.png"
                />
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[47px] capitalize font-inherit mq450:text-lgi mq450:leading-[28px] mq800:text-7xl mq800:leading-[38px]">
              <b>{`AI-AgriBee `}</b>
              <span className="text-darkslategray-200">
                Import Sourcing Network is developing by Scientists graduated
                from Cornell University, USA.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
