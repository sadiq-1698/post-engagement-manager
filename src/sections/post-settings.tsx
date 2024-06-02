const PostSettings = () => {
  return (
    <>
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
    </>
  );
}

export default PostSettings;