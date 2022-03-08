import React, { useState } from "react";

function Quote(props) {
  const [quotes, setQuotes] = useState([
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe provident fugit blanditiis eveniet expedita enim rerum quos cumque necessitatibus minus.",
  ]);

  return (
    <section className="quote">
      <div className="container">
        <div className="row my-5 pt-5 justify-content-center">
          <div className="col-md-6 col-sm-12 mb-sm-3 m-3">
            <div className="row mx-lg-5 mx-md-1 ">
              <div className="carousel-inner"></div>
              {quotes[0]}
            </div>
            <div className="mt-5 ">
              <button className="btn btn-outline-info m-1">pre</button>
              <button className="btn btn-outline-info m-1">next</button>
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
