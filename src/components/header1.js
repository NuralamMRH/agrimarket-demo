import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import PropTypes from "prop-types";

const Header1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBuyTextClick = useCallback(() => {
    navigate("/ecommercemarketplace");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/digital-service-amex");
  }, [navigate]);
  const onNavClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch h-[86px] flex flex-row items-start justify-start py-0 pr-0 pl-px box-border sticky top-[0] z-[99] max-w-full ${className}`}
    >
      <Header
        group1022="/group-1022@2x.png"
        headerItemsMarginTop="unset"
        headerItemsHeight="unset"
        headerItemsTop="unset"
        headerItemsPosition="unset"
        headerItemsFlex="1"
        headerMarginBottom="unset"
        __BUY__={onBuyTextClick}
        __PH1__={onContactTextClick}
        __HOME__={onNavClickHome}
      />
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
