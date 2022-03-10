import React from "react";

function Footer() {
  return (
    <section className="container-fluid frontFooter">
      <div className=""></div>
      <div className="content">
        <div className="py-5">
          <h2>Follow me</h2>
          <a
            href="https://github.com/Mustafa-Zahedi/"
            target="_blank"
            className="btn btn-secondary m-2"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-zahedi-17870020b/"
            target="_blank"
            className="btn btn-primary m-2"
          >
            Linkdin
          </a>
        </div>
        <div className="my-3 pb-4">
          <span>© All right reserved. made by Zahedi</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
