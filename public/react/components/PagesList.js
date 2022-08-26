import React from "react";
import { Page } from "./Page";

export const PagesList = ({ pages, article, setArticle, setIsClicked }) => {
  return (
    <>
      {pages.map((page, idx) => {
        return (
          <Page
            page={page}
            key={idx}
            article={article}
            setArticle={setArticle}
            setIsClicked={setIsClicked}
          />
        );
      })}
    </>
  );
};
