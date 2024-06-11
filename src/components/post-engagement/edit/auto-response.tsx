import { useContext } from "react";
import AddComments from "components/common/add-comments";
import ClepherSelect from "components/common/clepher-select";
import SubHeader from "components/post-engagement/edit/sub-header";
import { ASSISTANCE_TYPES, COMMENT_TYPES, INTEGRATION_TYPES } from "enums";
import { PostEngagementEditContext, PostEngagementEditDispatchContext } from "utils/contexts/PostEngagementEditContext";

const AutoResponse = () => {
  const {
    comments,
    commentType,
    assistanceType,
    integrationType,
  } = useContext(PostEngagementEditContext);

  const {
    setComments,
    setCommentType,
    setAssistanceType,
    setIntegrationType,
  } = useContext(PostEngagementEditDispatchContext);

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="opacity-60">
          Enable To Automatically Like Comments
        </div>
        <div>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>
      </div>

      <br />

      <SubHeader>
        Reply In Comments
      </SubHeader>

      <ClepherSelect
        label="Comment type"
        value={commentType}
        options={COMMENT_TYPES}
        onSelect={setCommentType}
      />

      {
        commentType.value === "openai" &&
        <>
          <ClepherSelect
            label="Select Integration"
            value={integrationType}
            options={INTEGRATION_TYPES}
            onSelect={setIntegrationType}
          />
          <ClepherSelect
            value={assistanceType}
            label="Select Assistance"
            options={ASSISTANCE_TYPES}
            onSelect={setAssistanceType}
          />
        </>
      }

      {
        commentType.value === "static" &&
        <AddComments comments={comments} setComments={setComments} />
      }

    </>
  );
}

export default AutoResponse;