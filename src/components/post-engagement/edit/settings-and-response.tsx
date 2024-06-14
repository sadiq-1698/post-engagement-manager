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
              const isActive = tabIndex === idx;
              const enter = `translateX(${-idx * 100}%)`;
              const exit = `translateX(${idx === 0 ? -100 : idx * 100}%)`;
              return (
                <div className="min-w-full transition-transform duration-[400ms]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? enter : exit
                  }}
                >
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