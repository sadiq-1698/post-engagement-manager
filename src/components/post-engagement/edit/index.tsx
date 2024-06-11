import EditTools from "components/post-engagement/edit/edit-tools";
import EditHeader from "components/post-engagement/edit/edit-header";
import { PostEngagementEditProvider } from "utils/contexts/PostEngagementEditContext";

const PostEngagementEdit = () => {
  return (
    <PostEngagementEditProvider>
      <EditHeader />
      <EditTools />
    </PostEngagementEditProvider>
  );
}

export default PostEngagementEdit;