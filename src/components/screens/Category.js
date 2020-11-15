import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../parts/Breadcrumb";
import Posts from "../parts/Posts";
import Sidebar from "../parts/Sidebar";
import Footer from "../parts/Footer";
const Category = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Breadcrumb></Breadcrumb>

      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts></Posts>
            <Sidebar></Sidebar>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Category;
