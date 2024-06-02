import AutoResponse from "./auto-response";
import PostSettings from "./post-settings";
import PostUrl from "./post-url";
import SelectPost from "./select-post";

const EditTools = () => {
  return (
    <div className="mx-6">
      <div aria-label="Card" className="card bg-base-100 p-0 shadow-sm card-bordered">
        <div className="card-body gap-0 p-0">
          <div className="card-title"></div>
          <div className="flex flex-row">
            <div className="basis-2/5">
              <div role="tablist" className="tabs child:!border-b child:!text-sm tabs-bordered tabs-lg">
                <button role="tab" className="tab tab-active">
                  Settings
                </button>
                <button role="tab" className="tab">
                  Auto Response
                </button>
              </div>

              <div className="h-[76vh] overflow-y-auto px-6 py-3.5 text-sm">
                <div className="z-[1] opacity-100 transform-none">
                  {/* <PostSettings /> */}
                  <AutoResponse />
                </div>
                <br />
              </div>
            </div>

            <div className="basis-3/5">
              <div role="tablist" className="tabs h-12 bg-base-100 p-0 child:!rounded-none rounded-b-none border-b border-b-base-300 tabs-boxed tabs-lg">
                <button role="tab" className="tab tab-active">
                  Select A Post
                </button>
                <button role="tab" className="tab">
                  Post ID / URL
                </button>
              </div>
              {/* <SelectPost /> */}
              <PostUrl />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTools;