import React from "react";
import apiURL from "../api";

export const Page = ({ page, setArticle, setIsClicked }) => {
  const clickHandler = async () => {
    const res = await fetch(`${apiURL}/wiki/${page.slug}`);
    const data = await res.json();
    data.createdAt = `${data.createdAt.slice(8, 10)}/${data.createdAt.slice(
      5,
      7
    )}/${data.createdAt.slice(0, 4)}`;
    setArticle(data);
    setIsClicked(true);
  };

  return (
    <>
      <h3>{page.title}</h3>
      <button onClick={clickHandler}>Find out more</button>
    </>
  );
};
