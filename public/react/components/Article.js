import React from "react";

export const Article = ({ article, setIsClicked }) => {
  return (
    <>
      <p>
        <b>Author:</b> {article.author.name}
      </p>
      <p>
        <b>Published:</b> {article.createdAt}
      </p>
      <p>{article.content}</p>
      <p>
        <b>Tags:</b>
      </p>
      {article.tags.map((tag, i) => {
        return <p key={i}>{tag.name}</p>;
      })}
      <button onClick={() => setIsClicked(false)}>Back to Wiki List</button>
    </>
  );
};
