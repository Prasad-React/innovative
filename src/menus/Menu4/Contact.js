import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import data from "../../sitedata.json";
import Contactmap from "./map.js"

function Contact() {
  return (
     <>
       {data.contact.map((details) => {
          return (
             <>
               <section>
                 <div className="contact">
                   <section className="container  py-4" >
                     <h3 className="font-weight-bold text-left " style={{ color:"red"}}>
                       <section clasName="underline mr-auto"></section>
                       {details.title}
                     </h3>
                     <div className="row m-1" id="">
                       <div className="col-lg-6 centered  py-4 container"   id="border1">
                       <h5 className="font-weight-bold text-black text-left border-bottom ">
                       {details.header}
                       </h5>
                       <div className="contact1">
                       <img className="address"
                            src="./images/address1.png"  
                            style={{width:"30%", height:"150px"}}
                         />
                         {details.paragraph.map((e) => {
                           return( 
                             <>
                            
                             <div className="style">
                              <p className="">{e.p}</p>
                              </div>
                              </>
                         )})}
                       </div>
                       </div>
                       <div className="col-lg-6 centered  py-4 container "  id="border">
                       <h5 className="font-weight-bold text-black ">{details.subtitle}</h5>
                       <div className="  " id="newmap" >
                       <Contactmap />
                       </div>
                       </div>
                      
                     </div>
                   </section>
                 </div>
               </section>
             </>
            );
          })}
        
        </>
  )
};

export default Contact; 