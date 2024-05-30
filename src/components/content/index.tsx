import LeftContent from "./left";
import RightContent from "./right";

const Content = () => {
  return (
    <div aria-expanded="false" className="drawer lg:drawer-open">
      <LeftContent />
    </div>


  );
};

export default Content;
/*  <div className="grid grid-cols-1 gap-12 lg:grid-cols-9 px-6 pt-24 h-min w-full"> */
/* <LeftContent /> */
/* <RightContent /> */
/* </div> */