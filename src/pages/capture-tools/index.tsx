import { Outlet, useParams } from "react-router-dom";
import ToolsMenu from "../../components/drawer/tools-menu";

const CaptureToolsPage = () => {
  const { postEngagementId } = useParams();

  return (
    <>
      {!postEngagementId &&
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
          <ToolsMenu />
          <Outlet />
        </div>
      }
      {postEngagementId && <Outlet />}
    </>
  );
}

export default CaptureToolsPage;