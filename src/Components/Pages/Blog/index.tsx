import React, { useState, useEffect } from "react";
import butter from "../../../butter-client";
import PostSnippet from "./PostSnippet";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(false);
  const [data, setData] = useState<any | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({
        page: 1,
        page_size: 10,
      });
      setData(response?.data);
    } catch (e: any) {
      setError(`There was an error: ${e.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = () => (
    <div>
      {data.data.map((post: any, i: any) => (
        <PostSnippet {...post} key={i} />
      ))}
    </div>
  );

  const getContent = () => {
    if (loading) return <p>Fetching posts...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;
    return getPosts();
  };

  return (
    <div>
      <h1>Blog</h1>
      {getContent()}
    </div>
  );
};

export default Blog;
