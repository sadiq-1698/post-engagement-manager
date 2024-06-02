import Pagination from "../drawer/pagination";
import TableActions from "../drawer/table-actions";
import PostEngagementsTable from "../drawer/post-engagement-table";
import { Link, Route, Routes } from "react-router-dom";
import PostEngagementEdit from "./edit";

const PostEngagement = () => {
  return (
    <Routes>
      <Route index element={
        <>
          <div className="lg:col-span-7">
            <TableActions />
            <PostEngagementsTable />
            <Pagination />
          </div>
        </>}
      />
      <Route path=":postEngagementId/edit" element={<PostEngagementEdit />} />
    </Routes>
  );
}

export default PostEngagement;

{/* <div className="px-6"> */ }
{/* <Routes> */ }
{/* <Route path="" element={<PostEngagement />}> */ }
{/* <Route index element={<PostEngagement />} /> */ }
{/* <Route path=":postEngagementId/edit" element={<PostEngagementEdit />} /> */ }
{/* </Route> */ }
{/* <Route index element={<Navigate to="links-library" />} /> */ }
{/* </Routes> */ }