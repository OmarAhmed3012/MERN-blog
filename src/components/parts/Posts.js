import React from "react";
import PostItem from "./PostItem.js";
import Pagination from "./Pagination.js";

const Posts = () => {
  return (
    <React.Fragment>
      <div class="col-lg-8">
        <div class="blog-box list-style">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>

          <Pagination></Pagination>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Posts;
