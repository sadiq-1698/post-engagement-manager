import { useState } from "react";
import PostSettings from "components/post-engagement/edit/post-settings";
import AutoResponse from "components/post-engagement/edit/auto-response";

const SettingsAndResponse = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleTabClick = (index: number) => {
    if (index === tabIndex) return;
    setDirection(prev => index < tabIndex ? prev + 1 : prev - 1);
    setTabIndex(index);
  }

  return (
    <div className="basis-2/5">

      <div role="tablist" className="tabs child:!border-b child:!text-sm tabs-bordered tabs-lg">
        <button
          role="tab"
          onClick={() => handleTabClick(0)}
          style={{ borderBottomWidth: '1px' }}
          className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}
        >
          Settings
        </button>
        <button
          role="tab"
          onClick={() => handleTabClick(1)}
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
              const translate = `translateX(${direction * 100}%)`;
              return (
                <div className="min-w-full duration-[400ms]"
                  style={{
                    transform: translate,
                    opacity: isActive ? 1 : 0,
                    transitionProperty: "transform",
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.96, 0.25, 1.04)'
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