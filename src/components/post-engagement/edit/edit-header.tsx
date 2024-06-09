import Breadcrumbs from "components/common/breadcrumbs";
import { POST_ENGAGEMENT_BREADCRUMBS } from "enums/index";

const EditHeader = () => {
  return (
    <div className="-mt-5 mb-2 flex items-center justify-between px-8">
      <Breadcrumbs breadCrumbs={POST_ENGAGEMENT_BREADCRUMBS} />
      <div>
        <button className="btn btn-sm btn-primary">Save</button>
      </div>
    </div>
  );
}

export default EditHeader;