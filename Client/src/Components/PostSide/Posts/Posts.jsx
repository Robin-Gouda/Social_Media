import React from "react";
import "./Posts.css";
import { postsData } from "../../../Data/PostData";
import Pest from "./pest/Pest";

const Posts = () => {
  return (
    <div className="Posts">
      {postsData.map((post, id) => {
        return <Pest data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
