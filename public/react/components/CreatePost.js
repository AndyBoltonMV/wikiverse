import React, { useState } from "react";
import apiURL from "../api";

export const CreatePost = ({ setAddPost }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags, setTags] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${apiURL}/wiki`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        title,
        content,
        tags,
      }),
    });
    const data = await res.json();
    if (data.code === 200) {
      setAddPost(false);
      return;
    } else {
      throw new Error("Post not saved");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Author Name"
        />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Article Title"
        />
        <input
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <input onChange={(e) => setTags(e.target.value)} placeholder="Tag" />
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};
