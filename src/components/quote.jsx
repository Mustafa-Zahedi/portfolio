import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

let index = 2;
let reIndex = 0;

function Quote(props) {
  const [quotes, setQuotes] = useState("");
  console.log("quotes: ", quotes);
  const q = [
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque nece.",
    "amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.amet consectetur adipisicing rerum quos necessitatibus minus.amet consectetur adipisicing elit",
    "adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.",
  ];

  useEffect(() => {
    let a = q[1];
    setQuotes({ a });
  }, []);

  const handleClick = (e) => {
    let temp = [...q];
    if (e === "next" && temp[index]) {
      let a = temp[index];
      reIndex = index - 1;
      index++;
      setQuotes({ a });
    }
    if (e === "prev" && temp[reIndex]) {
      let a = temp[reIndex];
      index = reIndex + 1;
      reIndex--;
      setQuotes({ a });
    } else if (!temp[reIndex]) {
      index = 0;
      reIndex = q.length - 1;
      e === "prev" ? handleClick("prev") : handleClick("next");
    }
  };
  return (
    <section className="quote min-vh-70">
      <div className="container-lg container-fluid-md py-4">
        <div className="row my-5 pt-5 justify-content-center">
          <div className="row col-md-6 col-sm-12 my-3 py-1">
            <div className="col-12 p-lg-4 p-md-1 text-muted quoteHeight fs-4">
              {quotes["a"]}
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
