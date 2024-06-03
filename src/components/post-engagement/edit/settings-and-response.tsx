import { useState } from "react";
import PostSettings from "./post-settings";
import AutoResponse from "./auto-response";

const SettingsAndResponse = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="basis-2/5">

      <div role="tablist" className="tabs child:!border-b child:!text-sm tabs-bordered tabs-lg">
        <button role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`} onClick={() => setTabIndex(0)}>
          Settings
        </button>
        <button role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`} onClick={() => setTabIndex(1)}>
          Auto Response
        </button>
      </div>

      <div className="h-[76vh] overflow-y-auto px-6 py-3.5 text-sm">
        <div>
          {tabIndex === 0 && <PostSettings />}
          {tabIndex === 1 && <AutoResponse />}
        </div>
        <br />
      </div>
    </div>
  );
}

export default SettingsAndResponse;