import Sidebar from "./sidebar";
import DrawerToggle from "./drawer-toggle";
import DrawerContent from "./drawer-content";

const Drawer = () => {
  return (
    <div aria-expanded="true" className="drawer lg:drawer-open">
      <DrawerToggle />
      <DrawerContent />
      <Sidebar />
    </div>
  );
}

export default Drawer;