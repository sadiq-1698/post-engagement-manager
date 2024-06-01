import ToolsMenu from "./tools-menu";
import Pagination from "./pagination";
import TableActions from "./table-actions";
import PostEngagementsTable from "./post-engagement-table";
import Breadcrumbs from "../../sections/breadcrumbs";
import EditTools from "../../sections/edit-tools";

const DrawerContent = () => {
  return (
    <div className="drawer-content">
      <div className="pt-24">
        {/* <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
          <ToolsMenu />

          <div className="lg:col-span-7">
            <div className="px-6">
              <TableActions />
              <PostEngagementsTable />
              <Pagination />
            </div>
          </div>
        </div> */}

        <Breadcrumbs />
        <EditTools />
      </div>
    </div>
  );
}

export default DrawerContent;