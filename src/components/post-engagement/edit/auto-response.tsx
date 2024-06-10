import { useState } from "react";
import AddComments from "components/common/add-comments";
import SubHeader from "components/post-engagement/edit/sub-header";
import { ASSISTANCE_TYPES, COMMENT_TYPES, INTEGRATION_TYPES } from "enums";
import ClepherSelect, { SelectOptionType } from "components/common/clepher-select";

const AutoResponse = () => {
  const [commentType, setCommentType] = useState<SelectOptionType>(COMMENT_TYPES[0]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [integrationType, setIntegrationType] = useState<SelectOptionType>(INTEGRATION_TYPES[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [assistanceType, setAssistanceType] = useState<SelectOptionType>(ASSISTANCE_TYPES[0]);
  const [comments, setComments] = useState<Array<string>>([
    "explicabo a laboriosam fugit",
    "ex provident earum excepturi",
    "corrupti tempora vero ipsa"
  ]);

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
        options={COMMENT_TYPES}
        onSelect={setCommentType}
      />

      {
        commentType.value === "openai" &&
        <>
          <ClepherSelect
            label="Select Integration"
            options={INTEGRATION_TYPES}
            onSelect={setIntegrationType}
          />
          <ClepherSelect
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