import FrameComponent from "./frame-component";
import FoodCategoryItems1 from "./food-category-items1";
import FoodCategoryItems from "./food-category-items";
import PropTypes from "prop-types";

const Category = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[111px] pr-5 pl-[22px] box-border max-w-full text-left text-xl text-gray-300 font-semibold-17 ${className}`}
    >
      <div className="w-[1216px] flex flex-col items-start justify-start gap-[30px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-0 box-border max-w-full">
          <div className="w-[1256px] flex flex-row items-start justify-start gap-[20px] shrink-0 max-w-full mq1050:flex-wrap">
            <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
              Explore CATEGORY
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border min-w-[673px] max-w-full mq750:min-w-full">
              <div className="self-stretch h-0 relative grid [grid-row-gap:0px] [grid-column-gap:0px]" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[36px] max-w-full mq750:gap-[18px]">
            <FrameComponent
              group="/group-1.svg"
              dailyCatch="Daily Catch"
              propWidth="unset"
              propFlex="1"
              propMinWidth="137px"
            />
            <FoodCategoryItems1
              harvestSvgrepoCom1="/harvestsvgrepocom-1.svg"
              freshHarvest="Fresh Harvest"
            />
            <FoodCategoryItems1
              harvestSvgrepoCom1="/frame-1.svg"
              freshHarvest="Dried Foods"
              propFlex="1"
              propMinWidth="137px"
              propWidth="unset"
            />
            <FoodCategoryItems frame="/frame-2.svg" seaFood="SeaFood" />
            <FoodCategoryItems
              frame="/frame-3.svg"
              seaFood="Chicken"
              propFlex="1"
              propMinWidth="137px"
              propWidth="unset"
            />
            <FoodCategoryItems1
              harvestSvgrepoCom1="/frame-4.svg"
              freshHarvest="Pork"
              propFlex="1"
              propMinWidth="137px"
              propWidth="unset"
            />
            <FoodCategoryItems
              frame="/frame-5.svg"
              seaFood="Beef "
              propFlex="1"
              propMinWidth="137px"
              propWidth="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Category.propTypes = {
  className: PropTypes.string,
};

export default Category;
