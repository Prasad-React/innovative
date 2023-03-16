import React from "react";
import data from "../../sitedata.json";


function Pagetype1() {
  return (
    <div>
      {data.Pagetype1.map((information) => {
        return (
          <section className="container" id=""  >
            <div className="content">
              <h3 className=" m-3 ">{information.heading}</h3>
               <h6 className="m-3">{information.cod}</h6>
               <h6 className="m-3">{information.message}</h6>
                {information.list.map((content) => {
                return (
                  <>
                    <h5 className="  ">{content.dt}</h5>
                    <p>{content.p}</p>
                    <section>
                      {content.main.map((detail) => {
                        return (
                          <ul className="">
                          <p className="" id="p">
                             {detail.temp}
                             </p>
                             </ul>
                        );
                     })}
                    </section>
                  </>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Pagetype1;
