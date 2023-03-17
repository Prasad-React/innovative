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
               <h6 className="m-3">cod:{information.cod}</h6>
               <h6 className="m-3">message:{information.message}</h6>
                {information.list.map((content) => {
                return (
                  <>
                    <h5 className="  "> dt:{content.dt}</h5>
                    <p>{content.p}</p>
                    <section>
                      {content.main.map((detail) => {
                        return (
                          <ul className="">
                          <p className="" id="p">
                        Temperature:{detail.temp} </p>
                            <p>feels_like:{detail.feels_like}</p>
                            <p> temp_min:{detail.temp_min}</p>
                            <p> temp_max:{detail.temp_max}</p>
                            <p>  pressure:{detail.pressure}</p>
                            <p>  sea_level:{detail.sea_level}</p>
                            <p>  grnd_level:{detail.grnd_level}</p>
                            <p>  humidity:{detail.humidity}</p>
                            <p>  temp_kf:{detail.temp_kf}</p>
                            
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
