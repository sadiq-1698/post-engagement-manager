const Breadcrumbs = () => {
  return (
    <div className="-mt-5 mb-2 flex items-center justify-between px-8">
      <div
        role="navigation"
        aria-label="Breadcrumbs"
        className="breadcrumbs text-lg"
      >
        <ul>
          <li role="link">
            <a href="/929/capture-tools/post-engagements">Capture Tools</a>
          </li>
          <li role="link">
            <a href="/929/capture-tools/post-engagements">Post Engagement</a>
          </li>
          <li role="link">Edit</li>
        </ul>
      </div>
      <div>
        <button className="btn btn-sm btn-primary">Save</button>
      </div>
    </div>
  );
}

export default Breadcrumbs;