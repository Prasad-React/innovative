import React from "react";
import data from "../../sitedata.json";
import "./home.css";

function Pagetype1() {
  return (
    <div>
      {data.Pagetype1.map((information) => {
        return (
          <section className="container" id="">
            <div className="content">
              <h3 className="m-3">{information.heading}</h3>
              {information.detailservices.map((content) => {
                return (
                  <>
                  <div className="" id="q">
                    <h5 className="  ">{content.header}</h5>
                    <p>{content.date}</p>
                    <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"50%"}} >{content.Trainingwing}</th>
                 <th style={{width:"50%"}} >{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                       
                      <td> {details.Trainingwing} </td> 
                      <td> {details.Contactno} </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                 
                  
                </table>
                </div>
                </>);
                })}
                {information.detailservice.map((content) => {
                return (
                  <>
                <div className="" id="q">
                <aside>
                <h5 className="  ">{content.header}</h5>
                    <p>{content.date}</p>
                <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"25%"}} >{content.Trainingwing}</th>
                 <th style={{width:"25%"}} >{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                      <td> {details.Trainingwing} </td> 
                      <td> {details.Contactno} </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
                </aside>
                </div>
                  </>
                );
              })}
               {information.detailservic.map((content) => {
                return (
                  <>
                <div className="" id="q">
                <aside>
                <h5 className="  ">{content.header}</h5>
                    <p>{content.date}</p>
                <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"25%"}} >{content.Trainingwing}</th>
                 <th style={{width:"25%"}} >{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                      <td> {details.Trainingwing} </td> 
                      <td> {details.Contactno} </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
                </aside>
                </div>
                  </>
                );
              })}
             
             {information.detailservi.map((content) => {
                return (
                  <>
                <div className="" id="q">
                <aside>
                <h5 className="  ">{content.header}</h5>
                    <p>{content.date}</p>
                <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"25%"}} >{content.Trainingwing}</th>
                 <th style={{width:"25%"}} >{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                      <td> {details.Trainingwing} </td> 
                      <td> {details.Contactno} </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
                </aside>
                </div>
                  </>
                );
              })}
               {information.detailserv.map((content) => {
                return (
                  <>
                <div className="" id="q">
                <aside>
                <h5 className="  ">{content.header}</h5>
                    <p>{content.date}</p>
                <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                  <thread  > 
                  <tr >
                 <th style={{width:"25%"}} >{content.Trainingwing}</th>
                 <th style={{width:"25%"}} >{content.Contact}</th>
                  </tr>
                  <tbody id="customer">
                 {content.paragraph.map((details) => {
                     return (
                        <tr  >
                      <td> {details.Trainingwing} </td> 
                      <td> {details.Contactno} </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
                </aside>
                </div>
                  </>
                );
              })}
           </div>
            {/* <section> 
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
                    </section> */} 
          </section>
         
        )})}
    </div>
  );
}


export default Pagetype1;

                    
              
