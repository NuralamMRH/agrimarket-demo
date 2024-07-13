import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1273px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full shrink-0 text-left text-13xl text-white font-semibold-17 ${className}`}
    >
      <img
        className="h-[378px] w-[1214px] absolute !m-[0] right-[-55px] bottom-[-246px] object-contain"
        alt=""
        src="/mask-group-11@2x.png"
      />
      <img
        className="h-[378px] w-[1214px] absolute !m-[0] top-[-136px] right-[-53px] object-contain"
        alt=""
        src="/mask-group-21@2x.png"
      />
      <div className="h-[402px] w-[402px] absolute !m-[0] bottom-[225px] left-[241px] rounded-[50%] bg-dodgerblue-300" />
      <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[225px] box-border max-w-full mq800:pb-[95px] mq800:box-border mq1150:pb-[146px] mq1150:box-border">
        <div className="w-[1095px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[144px] max-w-full mq450:gap-[18px] mq800:gap-[36px] mq1150:gap-[72px]">
          <h1 className="m-0 w-[505px] relative text-inherit leading-[150%] capitalize font-bold font-inherit inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
            <p className="m-0">{`PR Campaign American `}</p>
            <p className="m-0">
              Food Quality and Safety Standard for Vietnam consumers.
            </p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6 box-border max-w-full text-darkslategray-200">
            <div className="flex-1 flex flex-row items-start justify-start gap-[116px] max-w-full mq800:gap-[29px] mq1150:flex-wrap mq1150:gap-[58px]">
              <img
                className="w-[402px] relative rounded-[50%] max-h-full object-cover max-w-full z-[1] mq1150:flex-1"
                loading="lazy"
                alt=""
                src="/ellipse-60@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[104px] px-0 pb-0 box-border min-w-[346px] max-w-full mq450:min-w-full">
                <h1 className="m-0 self-stretch relative text-inherit leading-[150%] capitalize font-inherit mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
                  <span>{`Agri-Platform for `}</span>
                  <b className="text-dodgerblue-100">American Organizations</b>
                  <span className="whitespace-pre-wrap">
                    {" "}
                    to connect directly with Vietnam WholeSales Markets.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
