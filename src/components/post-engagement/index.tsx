import Pagination from "./pagination";
import TableActions from "./table-actions";
import PostEngagementsTable from "./post-engagement-table";

const PostEngagement = () => {
  return (
    <div className="lg:col-span-7">
      <div className="px-6">
        <TableActions />
        <PostEngagementsTable />
        <Pagination />
      </div>
    </div>
  );
}

export default PostEngagement;