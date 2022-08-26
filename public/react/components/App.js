import React, { useState, useEffect } from "react";
import { PagesList } from "./PagesList";
import { Article } from "./Article";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { CreatePost } from "./CreatePost";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [article, setArticle] = useState();
  const [addPost, setAddPost] = useState(false);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {!isClicked ? (
        <PagesList
          pages={pages}
          setArticle={setArticle}
          setIsClicked={setIsClicked}
        />
      ) : (
        <Article article={article} setIsClicked={setIsClicked} />
      )}
      {!addPost ? (
        <button onClick={() => setAddPost(true)}>Add Post</button>
      ) : (
        <CreatePost setAddPost={setAddPost} />
      )}
    </main>
  );
};
