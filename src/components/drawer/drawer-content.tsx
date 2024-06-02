import ToolsMenu from "./tools-menu";
import Pagination from "./pagination";
import TableActions from "./table-actions";
import PostEngagementsTable from "./post-engagement-table";
import Breadcrumbs from "../../sections/breadcrumbs";
import EditTools from "../../sections/edit-tools";
import { Navigate, Route, Routes } from 'react-router-dom';
import PostEngagement from "../post-engagement";
import PostEngagementEdit from "../post-engagement/edit";


const Something = () => {
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
      {/* <Routes>
        <Route path="post-engagement" element={
          <>
            <ToolsMenu />

            <PostEngagement />
          </>
        } />
      </Routes> */}
    </div>
  );
}

const DrawerContent = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="links-library" />} />

        <Route path="post-engagement">
          <Route index element={<PostEngagement />} />
          <Route path=":id/edit" element={<PostEngagementEdit />} />
        </Route>
      </Routes>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
        <ToolsMenu />
      </div>

      {/* <div className="lg:col-span-7">
        <div className="px-6">
          <Routes>
            <Route index element={<Navigate to="links-library" />} />
            <Route path="post-engagement">
              <Route index element={<p>Hello</p>} />
              <Route path=":id/edit" element={<PostEngagementEdit />} />
            </Route>
          </Routes>
        </div>
      </div> */}



      {/* <Routes> */}
      {/* <div className="pt-24"> */}
      {/* <div className="grid grid-cols-1 gap-0 lg:grid-cols-9"> */}

      {/* <div className="lg:col-span-7"> */}
      {/* <div className="px-6"> */}
      {/* <Route index element={<Navigate to="links-library" />} /> */}
      {/* <Route path="*" element={<Something />} /> */}
      {/* <Route path="*" element={<Something />} /> */}
      {/* <Route path="post-engagement/:id/edit" element={
          } /> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </Routes> */}
    </>
  );
}

export default DrawerContent;