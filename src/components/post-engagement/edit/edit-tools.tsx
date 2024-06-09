import SettingsAndResponse from "components/post-engagement/edit/settings-and-response";
import PostSelectionAndUrl from "components/post-engagement/edit/post-selection-and-url";

const EditTools = () => {
  return (
    <div className="mx-6">
      <div aria-label="Card" className="card bg-base-100 p-0 shadow-sm card-bordered">
        <div className="card-body gap-0 p-0">
          <div className="card-title" />
          <div className="flex flex-row">
            <SettingsAndResponse />
            <PostSelectionAndUrl />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTools;