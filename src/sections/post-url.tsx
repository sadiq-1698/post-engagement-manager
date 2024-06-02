const PostUrl = () => {
  return (
    <div className="flex place-content-center">
      <div className="join mt-10">
        <input placeholder="Post ID / URL" className="input join-item w-96 input-bordered focus:outline-offset-0" value="" />
        <button className="btn join-item btn-primary">
          Grab Post
        </button>
      </div>
    </div>
  );
}

export default PostUrl;