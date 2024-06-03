const AutoResponse = () => {
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

      <h1 className="border-b border-b-base-300 mb-2.5 py-0.5 font-semibold">
        Reply In Comments
      </h1>

      <div className="form-control">
        <div className="label">
          <span className="label-text">
            Comment Type
          </span>
        </div>
        <div className="form-control">
          <select spellCheck={true} autoComplete="on" className="select select-bordered w-full">
            <option value="static" selected={true}>
              Static
            </option>
            <option value="openai">
              Open AI
            </option>
          </select>
        </div>
      </div>

      <div className="text-center">
        <br />

        <div className="bg-base-200 p-1.5 [&amp;:not(:last-of-type)]:mb-1.5 rounded-md border border-dotted border-base-300">
          <div className="flex flex-row items-center gap-1.5">
            <input name="65673" type="text" placeholder="Type your comment here" className="input w-full focus:outline-offset-0" value="explicabo a laboriosam fugit" />
            <button className="btn btn-sm btn-circle btn-ghost">
              ✕
            </button>
          </div>
        </div>

        <div className="bg-base-200 p-1.5 [&amp;:not(:last-of-type)]:mb-1.5 rounded-md border border-dotted border-base-300">
          <div className="flex flex-row items-center gap-1.5">
            <input name="94230" type="text" placeholder="Type your comment here" className="input w-full focus:outline-offset-0" value="ex provident earum excepturi" />
            <button className="btn btn-sm btn-circle btn-ghost">
              ✕
            </button>
          </div>
        </div>

        <div className="bg-base-200 p-1.5 [&amp;:not(:last-of-type)]:mb-1.5 rounded-md border border-dotted border-base-300">
          <div className="flex flex-row items-center gap-1.5">
            <input name="4600" type="text" placeholder="Type your comment here" className="input w-full focus:outline-offset-0" value="corrupti tempora vero ipsa" />
            <button className="btn btn-sm btn-circle btn-ghost">
              ✕
            </button>
          </div>
        </div>

        <br />

        <button className="btn btn-primary">
          Add Comment
        </button>
      </div>
    </>
  );
}

export default AutoResponse;