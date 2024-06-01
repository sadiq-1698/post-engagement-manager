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
                  <div className="flex flex-row items-center justify-between">
                    <div className="opacity-60">
                      Enable To Privately Reply To First-Level Comments Only
                    </div>
                    <div>
                      <input type="checkbox" className="toggle toggle-primary" />
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <div className="opacity-60">
                      Send Message To The Same User Only Once Per Post
                    </div>
                    <div>
                      <input type="checkbox" className="toggle toggle-primary" />
                    </div>
                  </div>

                  <br />

                  <h1 className="border-b border-b-base-300">
                    Require a Post Reaction
                  </h1>

                  <br />

                  <div className="mt-2.5">
                    <span id="add_positive_reaction">
                      <ul className="positive reactions-box">
                        <li className="reaction reaction-like" data-reaction="Like">
                        </li>
                        <li className="reaction reaction-love" data-reaction="Love">
                        </li>
                        <li className="reaction reaction-haha" data-reaction="HaHa">
                        </li>
                        <li className="reaction reaction-wow" data-reaction="Wow">
                        </li>
                        <li className="reaction reaction-sad" data-reaction="Sad">
                        </li>
                        <li className="reaction reaction-angry" data-reaction="Angry">
                        </li>
                      </ul>

                      <button className="btn btn-primary w-full">
                        Require reaction
                      </button>
                    </span>
                  </div>

                  <br />

                  <div className="form-control">
                    <div className="label">
                      <span className="label-text">
                        Exclude Comments With These Keywords
                      </span>
                    </div>
                    <div className="mb-2.5"></div>
                    <div className="join">
                      <input placeholder="Specify Keywords" className="input join-item w-full input-bordered focus:outline-offset-0" value="" />
                      <button className="btn join-item btn-primary">
                        Add Keyword
                      </button>
                    </div>
                  </div>

                  <br />

                  <div className="form-control">
                    <div className="label">
                      <span className="label-text">
                        Only Trigger For Comments With These Keywords
                      </span>
                    </div>
                    <div className="mb-2.5"></div>
                    <div className="join">
                      <input placeholder="Specify Keywords" className="input join-item w-full input-bordered focus:outline-offset-0" value="" />
                      <button className="btn join-item btn-primary">
                        Add Keyword
                      </button>
                    </div>
                  </div>

                  <br />

                  <h1 className="border-b border-b-base-300 mb-2.5 py-0.5 font-semibold">
                    Private Reply After Post Engagement
                  </h1>
                  <div className="form-control">
                    <div className="label">
                      <span className="label-text">
                        Select Message Type
                      </span>
                    </div>
                    <div className="form-control">
                      <select spellCheck={true} autoComplete="on" className="select select-bordered w-full">
                        <option value="flow" selected={true}>
                          Flow
                        </option>
                        <option value="single-message">
                          Single Message
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="label">
                      <span className="label-text">
                        Select Flow
                      </span>
                    </div>
                    <div className="form-control">
                      <select spellCheck={true} autoComplete="on" className="select select-bordered w-full">
                        <option value="" disabled={true} selected={true}>
                          Select
                        </option>
                        <option value="welcome">
                          Welcome Message
                        </option>
                        <option value="default">
                          Default Reply
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <br />
              </div>
            </div>

            <div className="basis-3/5">
              <div role="tablist" className="tabs h-12 bg-base-100 p-0 child:!rounded-none rounded-b-none border-b border-b-base-300 tabs-boxed tabs-lg">
                <button role="tab" className="tab">
                  Select A Post
                </button>
                <button role="tab" className="tab tab-active">
                  Post ID / URL
                </button>
              </div>
              <div className="flex place-content-center">
                <div className="join mt-10">
                  <input placeholder="Post ID / URL" className="input join-item w-96 input-bordered focus:outline-offset-0" value="" />
                  <button className="btn join-item btn-primary">
                    Grab Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTools;