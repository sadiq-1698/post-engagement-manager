import { useState } from "react";
import PostSettings from "components/post-engagement/edit/post-settings";
import AutoResponse from "components/post-engagement/edit/auto-response";

const SettingsAndResponse = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="basis-2/5">

      <div role="tablist" className="tabs child:!border-b child:!text-sm tabs-bordered tabs-lg">
        <button
          role="tab"
          onClick={() => setTabIndex(0)}
          style={{ borderBottomWidth: '1px' }}
          className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}
        >
          Settings
        </button>
        <button
          role="tab"
          onClick={() => setTabIndex(1)}
          style={{ borderBottomWidth: '1px' }}
          className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}
        >
          Auto Response
        </button>
      </div>

      <div className="h-[76vh] overflow-y-auto px-6 py-3.5 text-sm">
        <div className="w-full overflow-x-hidden flex">
          {
            [PostSettings, AutoResponse].map((tabComponent, idx) => {
              const away = idx === 0 ? -100 : idx * 100;
              return (
                // cubic-bezier(0.95, 0.05, 0.795, 0.035)
                <div className={`min-w-full ${tabIndex === idx ? `translate-x-[-${idx * 100}%] opacity-100` : `opacity-0 translate-x-[${away}%]`} transition-transform duration-[400ms]`}>
                  {tabComponent()}
                </div>
              );
            })
          }
        </div>
        <br />
      </div>
    </div>
  );
}

export default SettingsAndResponse;