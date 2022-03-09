import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Quote(props) {
  const [quotes, setQuotes] = useState([
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.",
    "amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.amet consectetur adipisicing elit. Senim rerum quos cumque necessitatibus minus.amet consectetur adipisicing elit",
    "amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.",
  ]);
  const handleClick = (e) => {
    console.log(quotes.length);
    if (e === "next") {
      let temp = [...quotes];
      let t = temp[0];
      temp[0] = temp[1];
      temp[1] = t;
      setQuotes(temp);
    } else {
      let temp = [...quotes];
      let t = temp[0];
      temp[0] = temp[1];
      temp[1] = t;
      setQuotes(temp);
    }
  };
  return (
    <section className="quote min-vh-70">
      <div className="container-lg container-fluid-md py-4">
        <div className="row my-5 pt-5 justify-content-center">
          <div className="row col-md-6 col-sm-12 my-3 py-1">
            <div className="col-12 p-lg-4 p-md-1 text-muted quoteHeight fs-4">
              {quotes[0]}
            </div>
            <div className="col-12 align-self-end">
              <div className="text-right">
                <a
                  className="btn btn-outline-info me-1 rounded-pill "
                  onClick={() => handleClick("prev")}
                >
                  <Icon icon="ooui:arrow-previous-ltr" />
                </a>
                <a
                  className="btn btn-outline-info rounded-pill"
                  onClick={() => handleClick("next")}
                >
                  <Icon icon="ooui:arrow-next-ltr" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-10">
            <div>
              <img
                className="img-fluid rounded"
                src="./be-a-Programmer.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
