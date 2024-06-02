import ToolsMenu from "../../components/drawer/tools-menu";
import PostEngagement from "../../components/post-engagement";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import PostEngagementEdit from "../../components/post-engagement/edit";

const CaptureTools = () => {
  const params = useParams();

  console.log(params)

  return (
    <>
      {
        // !params && <div className="grid grid-cols-1 gap-0 lg:grid-cols-9">
        <ToolsMenu />
        // </div>
      }


      <Routes>
        <Route path="post-engagement" element={<PostEngagement />}>
          {/* <Route index element={<PostEngagement />} /> */}
          {/* <Route path=":postEngagementId/edit" element={<PostEngagementEdit />} /> */}
        </Route>
        <Route index element={<Navigate to="links-library" />} />
      </Routes>
    </>
  );
}

export default CaptureTools;