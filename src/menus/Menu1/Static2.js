import React from "react";
import data from "../../sitedata.json";


function Pagetype2() {
  return (
    <div>
      {data.Pagetype2.map((information) => {
        return (
          <section className="container" id=""  >
            <div className="content">
              <h3 className=" m-3 ">{information.heading}</h3>
               <h6 className="m-3">cod:{information.cod}</h6>
               <h6 className="m-3">message:{information.message}</h6>
                {information.list.map((content) => {
                return (
                  <>
                    <h3 className="  "> Temperature</h3>
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
                     <h3>Weather</h3>
                     {content.weather.map((detail) => {
                        return (
                          <ul className="">
                          <p className="" id="p">
                            weather:{detail.id} </p>
                            <p>main:{detail.main}</p>
                            <p> description:{detail.description}</p>
                            <p> 10d:{detail.icon}</p>
                            
                            
                             </ul>
                        );
                     })}
                       <h3>Clouds</h3>
                     {content.clouds.map((detail) => {
                        return (
                          <ul className="">
                          <p className="" id="p">
                            All:{detail.all} </p>
                           
                             </ul>
                        );
                     })}
                       <h3>Winds</h3>
                     {content.wind.map((detail) => {
                        return (
                          <ul className="">
                          <p className="" id="p">
                            Speed:{detail.speed} </p>
                            <p>deg:{detail.deg}</p>
                            <p> gust:{detail.description}</p>
                            
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

export default Pagetype2;