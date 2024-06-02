import Pagination from "../drawer/pagination";
import TableActions from "../drawer/table-actions";
import PostEngagementsTable from "../drawer/post-engagement-table";

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