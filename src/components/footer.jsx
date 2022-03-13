import React from "react";
import { Icon } from "@iconify/react";

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
            className="m-2"
          >
            <Icon icon="fa-brands:github-square" color="gray" height="42px" />
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-zahedi-17870020b/"
            target="_blank"
            className="m-2"
          >
            <Icon icon="logos:linkedin-icon" height="40px" />
          </a>
        </div>
        <div className="my-3 pb-2">
          <span>© All right reserved. made by Zahedi</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
