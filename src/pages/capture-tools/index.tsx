import { CAPTURE_TOOLS_OPTION } from "enums/index";
import { Outlet, useParams } from "react-router-dom";
import ToolsMenu from "components/common/tools-menu";

const CaptureToolsPage = () => {
  const { postEngagementId } = useParams();

  return (
    <>
      {!postEngagementId &&
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
          <ToolsMenu title="Capture Tools" options={CAPTURE_TOOLS_OPTION} />
          <Outlet />
        </div>
      }
      {postEngagementId && <Outlet />}
    </>
  );
}

export default CaptureToolsPage;