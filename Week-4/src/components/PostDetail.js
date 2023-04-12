import React, { useState, useEffect } from "react";

function PostDetail() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [postId]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setPostId(value);
  };

  return (
    <div className="d42">
      <label htmlFor="postId">Post ID:</label>
      <input
        type="text"
        id="postId"
        name="postId"
        value={postId}
        onChange={handleInputChange}
      />
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PostDetail;
